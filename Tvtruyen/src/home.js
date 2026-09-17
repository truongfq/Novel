load('config.js');

function execute() {
    return Response.success([
        {title: "Truyện Hot", script: "source.js", input: BASE_URL + "the-loai/tat-ca/truyen-hot.html"},
        {title: "Truyện VIP", script: "source.js", input: BASE_URL + "the-loai/tat-ca/vip.html"},
        {title: "Truyện Đã Hoàn Thành", script: "source.js", input: BASE_URL + "the-loai/tat-ca/truyen-full.html"},
        {title: "Truyện Mới Cập Nhật", script: "source.js", input: BASE_URL + "the-loai/tat-ca/truyen-moi"}
    ]);
}
