export default function Instruction () {
    return (
        <p className="font-extralight text-center text-gray-400 flex mt-16 max-w-md mx-auto">
        Il gioco inizia, la luce centrale è spenta. In un tempo variabile che va
        da 0.5 a 1.5 secondi la luce centrale si accende mostrando
        randomicamente uno dei 4 colori tra rosso, blue, verde e giallo Dal
        momento in cui la luce si accende parte un timer di n secondi, l&apos;utente
        dovrà premere sulla linea dei 4 bottoni allineati, il buzz del colore
        corrispondente a quello mostrato dalla luce. Il timer che scorre deve
        mostrare fino ai millisecondi. Se l&apos;utente sbaglia il colore o il timer
        finisce, perde la partita e visualizza il modal di partita finita con
        due bottoni (esci che riporta alla schermata iniziale, riprova che fa
        iniziare nuovamente il gioco) Se l&apos;utente seleziona il colore giusto
        prima dello scadere del timer guadagna dei punti e passa direttamente al
        turno successivo (quindi luca spenta, riparte il timer ed il gioco
        ricomincia) I punti sono guadagnati in base alla velocita di risposta:<br/>
         - 50 punti se risponde entro 1/3 del tempo impostato sul timer <br/>
         - 25 punti se risponde entro 2/3 del tempo impostato sul timer <br/>
         - 10 punti se risponde entro i 3/3 del tempo impostato sul timer. <br/>
      </p>
    )
}