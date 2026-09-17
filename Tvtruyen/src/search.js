load('config.js');

function execute(key, page) {
    if (!page) page = '1';

    let searchUrl = BASE_URL + "tim-kiem?tukhoa=" + encodeURIComponent(key) + "&page=" + page;

    let response = fetch(searchUrl, {
        headers: {
            "referer": BASE_URL,
        }
    });
    if (response.ok) {
        let doc = response.html();
        let novelList = [];

        doc.select(".category-list-container .info-mobile-card").forEach(e => {
            novelList.push({
                name: e.select("h3").text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                host: BASE_URL
            });
        });

        return Response.success(novelList);
    }
    return Response.error("Không thể tìm kiếm. Vui lòng thử lại sau.");
}
