const lessonsTitle = document.title;

document.getElementById("code").addEventListener("click", () =>
    window.open(`https://github.com/UstymUkhman/uwal-webgpu-fundamentals/blob/main/src/${
        location.hash.slice(1)
    }/index.js`, "_blank")
, false);

function runLesson()
{
    if (!location.hash) return;
    const name = location.hash.slice(1);

    const title = name.split("-").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");

    import(`./${name}/index.js`);
    document.title = `${lessonsTitle} | ${title}`;
};

addEventListener("hashchange", runLesson, false);
runLesson();
