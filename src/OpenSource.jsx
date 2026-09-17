import { useEffect, useState } from "react";
import "./OpenSource.css";
import ShinyText from "./components/text/ShinyText";
import { FaGithub } from "react-icons/fa";
import { GoGitPullRequest, GoGitPullRequestClosed, GoGitMerge, GoGitCommit, GoRepo, GoIssueOpened, GoIssueClosed } from "react-icons/go";

const GITHUB_USERNAME = "kanaad-lims";

function timeAgo(dateString) {
    const seconds = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
    const units = [
        ["year", 31536000],
        ["month", 2592000],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
    ];
    for (const [label, secondsInUnit] of units) {
        const value = Math.floor(seconds / secondsInUnit);
        if (value >= 1) return `${value} ${label}${value > 1 ? "s" : ""} ago`;
    }
    return "just now";
}

function getPrStatus(item) {
    if (item.pull_request?.merged_at) return "merged";
    if (item.state === "closed") return "closed";
    return "open";
}

function ActivityIcon({ kind, status }) {
    if (kind === "issue") {
        return status === "closed" ? <GoIssueClosed /> : <GoIssueOpened />;
    }
    if (status === "merged") return <GoGitMerge />;
    if (status === "closed") return <GoGitPullRequestClosed />;
    return <GoGitPullRequest />;
}

function getStatusClass(kind, status) {
    if (kind === "issue") return status === "closed" ? "gh-pr-merged" : "gh-pr-open";
    return `gh-pr-${status}`;
}

function OpenSource() {
    const [raisedItems, setRaisedItems] = useState([]);
    const [commits, setCommits] = useState([]);
    const [orgOwners, setOrgOwners] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let cancelled = false;

        async function loadActivity() {
            try {
                const [prRes, issueRes, eventsRes] = await Promise.all([
                    fetch(`https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&sort=updated&order=desc&per_page=20`),
                    fetch(`https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:issue&sort=updated&order=desc&per_page=20`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`),
                ]);

                if (!prRes.ok || !issueRes.ok || !eventsRes.ok) throw new Error("GitHub API request failed");

                const prData = await prRes.json();
                const issueData = await issueRes.json();
                const eventsData = await eventsRes.json();

                const parsedPrs = (prData.items || []).map((item) => ({
                    id: item.id,
                    kind: "pr",
                    title: item.title,
                    url: item.html_url,
                    number: item.number,
                    repo: item.repository_url.split("/").slice(-2).join("/"),
                    status: getPrStatus(item),
                    updatedAt: item.updated_at,
                }));

                const parsedIssues = (issueData.items || []).map((item) => ({
                    id: item.id,
                    kind: "issue",
                    title: item.title,
                    url: item.html_url,
                    number: item.number,
                    repo: item.repository_url.split("/").slice(-2).join("/"),
                    status: item.state,
                    updatedAt: item.updated_at,
                }));

                const combinedRaisedItems = [...parsedPrs, ...parsedIssues].sort(
                    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
                );

                const parsedRaisedItems = combinedRaisedItems.slice(0, 6);

                const pushEvents = eventsData
                    .filter((event) => event.type === "PushEvent" && event.payload?.head)
                    .slice(0, 5);

                const commitResults = await Promise.all(
                    pushEvents.map(async (event) => {
                        try {
                            const res = await fetch(
                                `https://api.github.com/repos/${event.repo.name}/commits/${event.payload.head}`
                            );
                            if (!res.ok) return null;
                            const data = await res.json();
                            return {
                                sha: data.sha,
                                message: data.commit.message.split("\n")[0],
                                repo: event.repo.name,
                                url: data.html_url,
                                createdAt: event.created_at,
                            };
                        } catch {
                            return null;
                        }
                    })
                );

                const parsedCommits = commitResults.filter(Boolean);

                const owners = [...new Set(
                    [...combinedRaisedItems, ...parsedCommits].map((item) => item.repo.split("/")[0])
                )];

                if (!cancelled) {
                    setRaisedItems(parsedRaisedItems);
                    setCommits(parsedCommits);
                    setOrgOwners(owners);
                    setStatus("ready");
                }
            } catch {
                if (!cancelled) setStatus("error");
            }
        }

        loadActivity();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section id="opensource">
            <div className="section-title-row">
                <div className="opensource-header">
                    <ShinyText
                        text="/open-source"
                        speed={3}
                        delay={0}
                        color="#277c78"
                        shineColor="#AFFFF1"
                        spread={120}
                        direction="left"
                        yoyo={true}
                        pauseOnHover={false}
                        disabled={false}
                    />
                </div>

                <div className="section-line"></div>
            </div>

            <div className="mac-window">
                <div className="mac-window-titlebar">
                    <div className="mac-window-dots">
                        <span className="mac-dot mac-dot-red" />
                        <span className="mac-dot mac-dot-yellow" />
                        <span className="mac-dot mac-dot-green" />
                    </div>

                    <div className="mac-window-address">
                        <FaGithub />
                        <span>github.com/{GITHUB_USERNAME}</span>
                    </div>

                    <a
                        className="mac-window-link"
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Profile ↗
                    </a>
                </div>

                <div className="mac-window-body">
                    {status === "loading" && (
                        <div className="gh-status">Fetching latest activity from GitHub…</div>
                    )}

                    {status === "error" && (
                        <div className="gh-status gh-status-error">
                            Couldn't load GitHub activity right now.{" "}
                            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                                View profile directly →
                            </a>
                        </div>
                    )}

                    {status === "ready" && (
                        <div className="gh-columns">
                            <div className="gh-column">
                                <h3 className="gh-column-title">
                                    <GoGitPullRequest className="gh-column-icon" />
                                    PRs and Issues Raised
                                </h3>
                                <ul className="gh-list">
                                    {raisedItems.length === 0 && <li className="gh-empty">No recent PRs or issues found.</li>}
                                    {raisedItems.map((raised) => (
                                        <li key={`${raised.kind}-${raised.id}`} className="gh-item">
                                            <span className={`gh-icon ${getStatusClass(raised.kind, raised.status)}`}>
                                                <ActivityIcon kind={raised.kind} status={raised.status} />
                                            </span>
                                            <div className="gh-item-body">
                                                <a href={raised.url} target="_blank" rel="noopener noreferrer" className="gh-item-title">
                                                    {raised.title}
                                                </a>
                                                <span className="gh-item-meta">
                                                    <GoRepo /> {raised.repo} • #{raised.number} • {timeAgo(raised.updatedAt)}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="gh-column">
                                <h3 className="gh-column-title">
                                    <GoGitCommit className="gh-column-icon" />
                                    Recent Commits
                                </h3>
                                <ul className="gh-list">
                                    {commits.length === 0 && <li className="gh-empty">No recent commits found.</li>}
                                    {commits.map((commit) => (
                                        <li key={commit.sha} className="gh-item">
                                            <span className="gh-icon gh-commit">
                                                <GoGitCommit />
                                            </span>
                                            <div className="gh-item-body">
                                                <a href={commit.url} target="_blank" rel="noopener noreferrer" className="gh-item-title">
                                                    {commit.message}
                                                </a>
                                                <span className="gh-item-meta">
                                                    <GoRepo /> {commit.repo} • {commit.sha.slice(0, 7)} • {timeAgo(commit.createdAt)}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {orgOwners.length > 0 && (
                                    <div className="gh-orgs">
                                        <h4 className="gh-orgs-title">Contributed To</h4>
                                        <div className="gh-org-avatars">
                                            {orgOwners.map((owner) => (
                                                <a
                                                    key={owner}
                                                    href={`https://github.com/${owner}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="gh-org-avatar"
                                                    title={owner}
                                                >
                                                    <img src={`https://github.com/${owner}.png?size=64`} alt={owner} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default OpenSource;
