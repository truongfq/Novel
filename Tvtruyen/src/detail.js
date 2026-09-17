load('config.js');

function execute(url) {
    let response = fetch(url, {
        headers: {
            "referer": BASE_URL,
        }
    });
    if (response.ok) {
        let doc = response.html();

        let name = doc.select("h3.title#comic_name").text();
        let cover = doc.select(".book img").first().attr("src");
        let author = doc.select(".author a.item-value").text();
        let description = doc.select("section.limit-desc").html();
        let genres = [];
        doc.select(".genres a.item-value").forEach(e => {
            genres.push(e.text());
        });
        let status = doc.select(".info .item-value.text-success").text();

        return Response.success({
            name: name,
            cover: cover,
            author: author,
            description: description,
            genres: genres,
            status: status,
            link: url
        });
    }
    return Response.error("Không thể tải thông tin truyện.");
}
