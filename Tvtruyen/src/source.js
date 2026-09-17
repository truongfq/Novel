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
        let novelList = [];

        doc.select(".category-list-container .info-mobile-card").forEach(e => {
            novelList.push({
                name: e.select(".info-title .name a").text(),
                link: e.select(".info-title .name a").attr("href"),
                cover: e.select(".info-image img").attr("src"),
                host: BASE_URL
            });
        });

        return Response.success(novelList);
    }
    return Response.error("Không thể tải danh sách truyện.");
}
