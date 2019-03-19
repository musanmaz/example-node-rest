const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))

app.get('/gs', (req, res) => {
    res.header("Content-Type",'application/json');
    res.json({ 
        alphabet : "Aa, Bb, Cc, Çç, Dd, Ee, Ff, Gg, Ğğ, Hh, İi, Iı, Jj, Kk, LI, Mm, Nn, Oo, Öö, Pp, Rr, Ss, Şş, Tt, Uu, Üü, Vv, Yy, Zz",
        text : "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
        })
})

app.listen('3030')