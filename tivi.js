let Tivi = function () {
    this.batTat = false;
    this.amLuongTV = function (remote) {
        return remote.amLuong;
    };

    this.boolen = function () {
        if (!this.batTat) {
            this.batTat = true;
            console.log(this.batTat);
            console.log("Am luong : " + tivi.amLuongTV(remote));
        } else {
            this.batTat = false;
            console.log(this.batTat);
        }
    };

    this.dieuKhienAmLuongTang = function (remote) {
        if (this.batTat) {
            this.batTat = true;
            if (remote.amLuong < 20) {
                remote.amLuong++;
                console.log("Am luong hien tai : " + remote.amLuong);
            } else {
                console.log("Am luong toi da!!");
            }
        }
    };
    this.dieuKhienAmLuongGiam = function (remote) {
        if (this.batTat) {
            this.batTat = true;
            if (remote.amLuong >= 0) {
                console.log("Am luong hien tai : " + remote.amLuong);
                return remote.amLuong--;
            } else {
                console.log("Khong the giam them!!");
            }
        }
    };
    this.chuyenKenhTV = function (remote, chanel) {
        if (this.batTat) {
            this.batTat = true;
            alert("Kenh thu " + chanel + " da duoc bat!");
        }
    };
};