function manageComments(input) {
    const users = new Set();
    const articles = new Set();
    const comments = {};

    input.forEach(line => {
        if (line.startsWith('user ')) {
            let username = line.split('user ')[1];
            users.add(username);
        } else if (line.startsWith('article ')) {
            let article = line.split('article ')[1];
            articles.add(article);
        } else if (line.includes(' posts on ')) {
            let [userInfo, commentInfo] = line.split(' posts on ');
            let [articleInfo, commentContent] = commentInfo.split(': ');
            let [commentTitle, comment] = commentContent.split(', ');

            let username = userInfo;
            let article = articleInfo;

            if (users.has(username) && articles.has(article)) {
                if (!comments[article]) {
                    comments[article] = [];
                }
                comments[article].push({
                    username,
                    commentTitle,
                    comment
                });
            }
        }
    });

    let sortedArticles = Object.keys(comments).sort((a, b) => comments[b].length - comments[a].length);

    sortedArticles.forEach(article => {
        console.log(`Comments on ${article}`);
        let sortedComments = comments[article].sort((a, b) => a.username.localeCompare(b.username));
        sortedComments.forEach(({ username, commentTitle, comment }) => {
            console.log(`--- From user ${username}: ${commentTitle} - ${comment}`);
        });
    });
}
