window.onload = function () {

    document.getElementById('data').innerHTML = 'Corpo';
    document.getElementById('descrizione').innerHTML = getDescrizione('Corpo');

    const pieces = document.getElementsByTagName('svg');
    for (var i = 0; i < pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            let areaPosition = t.target.getAttribute('data-position') || t.target.parentElement.getAttribute('data-position');
            if (areaPosition) {
                document.getElementById('data').innerHTML = areaPosition;
                document.getElementById('descrizione').innerHTML = getDescrizione(areaPosition);
            }
        }
    }
    
    // Aggiunta per gestire il clic su parole all'interno delle descrizioni
    document.getElementById('descrizione').onclick = function(e) {
        if (e.target.tagName === 'A') {
            let areaLinked = e.target.textContent;
            document.getElementById('data').innerHTML = areaLinked;
            document.getElementById('descrizione').innerHTML = getDescrizione(areaLinked);
        }
    };
}

function getDescrizione(posizione) {
    switch (posizione) {
        case 'Testa':
            return 'La testa è la parte superiore del corpo umano, contenente il <a onclick="selectArea(\'Cervello\')">Cervello</a>, e altre importanti strutture anatomiche.';
        case 'Spalle':
            return 'Le spalle sono la parte superiore del tronco umano, che collega le braccia al resto del corpo. e qui che vengono applicati i "Marchi" minori, tatuaggi che portano un qualche significato, solitamente pensato per apportare vantaggi e migliorie al mago, in alcuni casi centrati per il combattimento e le magie. Al contrario di quello che si potrebbe pensare, le spalle sono un pessimo posto per applicare un marchio, ma è quello più legalmente accessibile.';
        case 'Braccia':
            return 'Le braccia sono gli arti superiori del corpo umano, che si estendono dalla spalla al polso.';
        case 'Petto':
            return 'Il petto è la parte anteriore del torace umano, che contiene il <a onclick="selectArea(\'Cuore\')">Cuore</a> e i polmoni.';
        case 'Addome':
            return 'L\'addome è la parte centrale del corpo umano, che contiene gli organi digestivi e altre importanti strutture anatomiche, ma oltre a ciò contiene anché il nucleo dell\'<a onclick="selectArea(\'Anima\')">Anima</a>.';
        case 'Mani':
            return 'Le mani sono gli arti superiori del corpo umano che consentono la manipolazione e la presa degli oggetti. Sono costituite da ossa, muscoli, tendini e articolazioni che permettono una vasta gamma di movimenti e gesti. Proprio per questo sono la parte del corpo nella quale si deposità la maggior quantità di <a onclick="selectArea(\'Mana\')">Mana</a>.';
        case 'Gambe':
            return 'Le gambe sono gli arti inferiori del corpo umano, che si estendono dal bacino ai piedi.';
        case 'Cervello':
            return 'Il cervello è l\'organo principale del sistema nervoso centrale negli esseri umani e in altri vertebrati. È protetto all\'interno del cranio e controlla la maggior parte delle funzioni corporee, inoltre è direttamente collegato all\'<a onclick="selectArea(\'Anima\')">Anima</a>.';
        case 'Cuore':
            return 'Il cuore è un organo muscolare cavo che pompa il sangue attraverso i vasi sanguigni del sistema circolatorio. È situato nel torace, dietro lo sterno e leggermente a sinistra. si dice inoltre essere la dimora dello <a onclick="selectArea(\'Spirito\')">Spirito</a>';
        case 'Mana':
            return 'Il Mana è una sostanza simile all\'etere, distribuita in modo disomogeneo nell\'universo, agendo come fonte di energia intermedia. Può essere convertito in diverse forme di energia, come il calore o il movimento. Si accumula attorno a entità con "potere", che possono essere persone, animali, piante o oggetti, riflettendo la loro potenza. Questa sostanza è visibile solo per i Maghi, una razza in grado di percepire e manipolare il Mana per eseguire incantesimi. Il Mana si adatta alla volontà di chi lo attraversa, permettendo ai Maghi di modellarlo in base ai loro intenti, ma richiede una vasta conoscenza e una forte volontà per essere sfruttato efficacemente. La maggiore parte della popolazione, conosciuta come "barbari", non possiede questa capacità e si limita a utilizzare le proprie abilità fisiche.';
        case 'Spirito':
            return 'Lo Spirito è l\'insieme di tutte le emozioni e gli stati d\'animo di un individuo, ma va oltre, quasi come un\'entità vivente, senziente e incorporea. Ha capacità di ragionamento limitate e una propria etica, in sintonia con quella del suo ospite. Collegato al suo proprietario tramite la "catena dello Spirito", che si pensa essere attacca al cuore, lo Spirito è invisibile e intangibile, il che rende le speculazioni su di esso puramente teoriche. Tuttavia, la sua esistenza è confermata dai diavoli, che possono riversare il proprio Spirito in altri individui. Nella gerarchia degli stregoni, che utilizzano le emozioni per alimentare la loro magia, i diavoli sono al vertice. Lo Spirito è distintivo dalla "volontà", ma i due sono in qualche modo interconnessi, rafforzandosi reciprocamente.';
        case 'Anima':
            return 'L\'Anima rappresenta l\'insieme di tutti i ricordi e le conoscenze di un individuo. Se il cervello venisse modificato, l\'Anima non ne risentirebbe, ma se fosse l\'Anima stessa a subire alterazioni, i ricordi dell\'individuo verrebbero influenzati. Manipolare l\'Anima è un\'impresa titanica, anche per gli Sciamani, druidi specializzati nel contatto con le anime. Questi possono manipolarle e modificarne il contenuto con la giusta abilità. L\'Anima è connessa al vivente attraverso i "fili dell\'Anima", centinaia di migliaia di fili che ancora oggi continuano a essere scoperti dagli studiosi sciamanici. L\'Anima può riavvolgere un filo, avvicinandolo al nucleo situato nell\'addome, preparandosi così alla morte dell\'individuo e al suo viaggio verso l\'aldilà. Solo i "Ghoul", mostri incapaci di morire, sono stati in grado di apprendere consapevolmente questa abilità, manipolando i fili dell\'Anima per muovere i corpi dopo la morte. L\'Anima è attratta verso il centro del pianeta, dove risiede l\'aldilà, rendendo gli abitanti di Stone molto più pesanti. Questo fenomeno non ha portato a mutazioni evolutive, grazie alla gravità ridotta su Stone. L\'Anima si lega all\'individuo in base alla sua percezione di sé, ma se qualcuno si convincesse di essere un\'altra persona, potrebbe staccare la propria Anima e attaccarla a quella di un altro, sebbene ciò richieda uno sforzo mentale enorme. L\'unico ad averlo fatto con successo più di tre volte è stato "Yu", lo sciamano più potente di tutti i tempi.';
        case 'Corpo':
            return 'Il Corpo è il contenitore di uno o più "Life Recquires", i sei elementi necessari per stabilire che un essere vivente sia effettivamente tale. Conosciamo cinque di essi: Anima, Spirito, Corpo, Cervello e Mana. Il sesto elemento rimane ancora un mistero anche per gli studiosi. Questo è il corpo di un "mago", una delle razze di mostri più popolose di Stone, che sono anatomicamente molto simili agli esseri umani. Infatti, è impossibile distinguere un mago da un umano.';            
        default:
            return '';
    }
}
