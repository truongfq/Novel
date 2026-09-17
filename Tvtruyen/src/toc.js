load('config.js');

function execute(url, page) {
    if (!page) page = '1';

    let response = fetch(url + "?page=" + page, {
        headers: {
            "referer": BASE_URL,
        }
    });
    if (response.ok) {
        let doc = response.html();
        let chapterList = [];

        doc.select(".list-chapter li a").forEach(e => {
            chapterList.push({
                name: e.select(".chapter-text-all").text(),
                link: e.attr("href")
            });
        });

        return Response.success(chapterList);
    }
    return Response.error("Không thể tải danh sách chương.");
}
