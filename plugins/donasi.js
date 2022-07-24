let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi • Dana 」─⬣
│ • Pulsa : +62 819-5929-3465
│ • Gopay : +62 812-7367-7810
╰────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6281959293465
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
