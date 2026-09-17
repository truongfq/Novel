load('config.js');

function execute(url) {
    let response = fetch(url, {
        headers: {
            "referer": BASE_URL,
        }
    });
    if (response.ok) {
        let doc = response.html();

        // Loại bỏ đoạn quảng cáo/chữ ký tự động chèn vào giữa và cuối nội dung
        doc.select(".signature").remove();

        let content = doc.select("#chapter-content");
        if (content && content.size() > 0) {
            return Response.success(content.html());
        }

        return Response.error("Không thể xác định nội dung chương.");
    }
    return Response.error("Không thể tải nội dung chương. Vui lòng thử lại sau.");
}
