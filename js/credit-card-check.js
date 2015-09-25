function creditCard(e) {
    if (!e) return null;
    e = String(e);
    e = e.replace(/[^0-9]/g, "");
    var n, t = {
        elo: ["627780", "636548", "636117", "637095", "639350", "627893", "636368", "438935", "504175", "451416", "636297", "5067", "4576", "4011"],
        discover: ["6011", "622", "64", "65"],
        diners: ["30", "36", "38"],
        amex: ["34", "37"],
        aura: ["50"],
        jcb: ["35"],
        hipercard: ["384100", "384140", "384160", "60"],
        visa: ["4"],
        mastercard: ["5"]
    }, a = 0;
    for (var r in t) for (var u = 0; u < t[r].length; u++) {
        var o, l, s = t[r][u];
        s.length > e.length ? (o = e, l = s.substring(0, e.length)) : (o = e.substring(0, s.length), l = s), o == l && s.length > a && (n = r, a = s.length)
    }
    return n ? a <= e.length ? n : undefined : undefined;
}

module.exports.card = creditCard;
