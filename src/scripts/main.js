AOS.init();

const dataDoEvento = new Date("Jun 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHora = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampDoEvento -timeStampAtual

    const diasEMMs = 1000 * 60 * 60 * 24
    const horasEMMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteEvento = Math.floor(tempoAteEvento / diasEMMs)
    console.log(diasAteEvento)

    const horasAteEvento = Math.floor(tempoAteEvento % diasEMMs / horasEMMs)
    console.log(horasAteEvento)

    const minutosAteEvento = Math.floor(tempoAteEvento % horasEMMs / minutosEmMs)
    console.log(minutosAteEvento)

    const segundosAteEvento = Math.floor(tempoAteEvento % minutosEmMs / 1000 )
    console.log(segundosAteEvento)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`

    if (tempoAteEvento < 0) {
        clearInterval(contaHora);
        document.getElementById('contador').innerHTML = "Evento expirado";
    }
},1000)

