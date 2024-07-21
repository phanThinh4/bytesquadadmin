var app = angular.module("app-SMS", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/spa/home.html"
        })
        .when("/thietLapChiNhanh", {
            templateUrl: "/spa/thietLapChiNhanh.html"
        })
        .when("/quanLyChiNhanh", {
            templateUrl: "/spa/quanLyChiNhanh.html"
        })
        .when("/quanLyNguoiDung", {
            templateUrl: "/spa/quanLyNguoiDung.html"
        })
        .when("/thietLapNguoiDung", {
            templateUrl: "/spa/thietLapNguoiDung.html"
        })
        .when("/thietLapVaiTro", {
            templateUrl: "/spa/thietLapVaiTro.html"
        })
        .when("/danhmuc", {
            templateUrl: "/spa/danhmuc.html",
            controller: "danhMucCtrl",
        })
        .when("/themMoiHangHoa", {
            templateUrl: "/spa/themMoiHangHoa.html"
        })
        .when("/loaiSanPham", {
            templateUrl: "/spa/loaiSanPham.html",
            controller: "loaiSanPhamCtrl",
        })
        .when("/kiemkho", {
            templateUrl: "/spa/kiemkho.html"
        })
        .when("/themMoiKiemKho", {
            templateUrl: "/spa/themMoiKiemKho.html"
        })
        .when("/dathang", {
            templateUrl: "/spa/dathang.html"
        })
        .when("/nhaphang", {
            templateUrl: "/spa/nhaphang.html"
        })
        .when("/themMoiNhapHang", {
            templateUrl: "/spa/themMoiNhapHang.html"
        })
        .when("/chuyenhang", {
            templateUrl: "/spa/chuyenhang.html"
        })
        .when("/themMoiChuyenHang", {
            templateUrl: "/spa/themMoiChuyenHang.html"
        })
        .when("/hoadon", {
            templateUrl: "/spa/hoadon.html"
        })
        .when("/themMoiHoaDon", {
            templateUrl: "/spa/themMoiHoaDon.html"
        })
        .when("/khoHang", {
            templateUrl: "/spa/khoHang.html"
        })
        .when("/themMoiKhoHang", {
            templateUrl: "/spa/themMoiKhoHang.html"
        })
        .when("/khachhang", {
            templateUrl: "/spa/khachhang.html"
        })
        .when("/themMoiKhachHang", {
            templateUrl: "/spa/themMoiKhachHang.html"
        })
        .when("/nhacungcap", {
            templateUrl: "/spa/nhacungcap.html"
        })
        .when("/themMoiNhaCungCap", {
            templateUrl: "/spa/themMoiNhaCungCap.html"
        })
        .when("/bccuoingay", {
            templateUrl: "/spa/bccuoingay.html"
        })
        .when("/bcbanhang", {
            templateUrl: "/spa/bcbanhang.html"
        })
        .when("/bchanghoa", {
            templateUrl: "/spa/bchanghoa.html"
        })
        .when("/banHang", {
            templateUrl: "/spa/banHang.html",
            controller: "banHangCtrl",
        })
        .otherwise({
            redirectTo: "/"
        });

    // $httpProvider.defaults.headers.common["Authorization"] = "Basic c3RhZmY6MTIz";
})

let host = "http://localhost:8080/api";


