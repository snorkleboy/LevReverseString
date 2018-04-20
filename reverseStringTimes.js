#!/usr/bin/env node


function reverseA(str, i=0){
    if(i === str.length){
        return ''
    }
    return reverseA(str,i+1) + str[i]
}
function reverseB(str){
    const ans = new Array(str.length)
    const last = str.length-1
    for(let i=0;i<str.length;i++){
        ans[i] = str[last-i]
    }
    return ans.join('')
}

function reverseC(str){
    const ans=new Array(str.length)
    let last = str.length-1
    let first = 0
    while (first<last){
        ans[last] = str[first]
        ans[first] = str[last]
        first++
        last--
    }
    return ans.join('')
}
function timeTest(func,arr,runtimes){
    let ans = 0
    let end = null;
    let start = null;
    for (let i = 0; i < runtimes; i++) {
        arr.forEach(str => {
            start = Date.now()
            func(str)
            end = Date.now()
            ans += end - start
        })
    }            
    return ans/runtimes
}


if 
(   reverseA("string") === "gnirts" &&
    reverseB("string") === "gnirts" &&
    reverseC("string") === "gnirts"
){
    const strArr = `Paid was hill sir high. For him precaution any advantages dissimilar comparison few terminated projecting. Prevailed discovery immediate objection of ye at. Repair summer one winter living feebly pretty his. In so sense am known these since. Shortly respect ask cousins brought add tedious nay. Expect relied do we genius is. On as around spirit of hearts genius. Is raptures daughter branched laughter peculiar in settling. 
    Was justice improve age article between.No projection as up preference reasonably delightful celebrated.Preserved and abilities assurance tolerably breakfast use saw.And painted letters forming far village elderly compact.Her rest west each spot his and you knew.Estate gay wooded depart six far her.Of we be have it lose gate bred.Do separate removing or expenses in .Had covered but evident chapter matters anxious.

    Too cultivated use solicitude frequently.Dashwood likewise up consider
    continue entrance ladyship oh.Wrong guest given purse power is no.Friendship to connection an am considered difficulty.Country met pursuit lasting moments why calling certain the.Middletons boisterous our way understood law.Among state cease how and sight since shall.Material did pleasure breeding our humanity she contempt had.So ye really mutual no cousin piqued summer result.

    Game of as rest time eyes with of this it.Add was music merry any truth since going.Happiness she ham but instantly put departure propriety.She amiable all without say spirits shy clothes morning.Frankness in extensive to belonging improving so certainty.Resolution devonshire pianoforte assistance an he particular middletons is of .Explain ten man uncivil engaged conduct.Am likewise betrayed as declared absolute do .Taste oh spoke about no solid of hills up shade.Occasion so bachelor humoured striking by attended doubtful be it.

        Piqued favour stairs it enable exeter as seeing.Remainder met improving but engrossed sincerity age.Better but length gay denied abroad are.Attachment astonished to on appearance imprudence so collecting in excellence.Tiled way blind lived whose new.The
    for fully had she there leave merit enjoy forth.

    Up unpacked friendly ecstatic so possible humoured do .Ample end might folly quiet one set spoke her.We no am former valley assure.Four need spot ye said we find mile.Are commanded him convinced dashwoods did estimable forfeited.Shy celebrated met sentiments she reasonably but.Proposal its disposed eat advanced marriage sociable.Drawings led greatest add subjects endeavor gay remember.Principles one yet assistance you met impossible.

    Led ask possible mistress relation elegance eat likewise debating.By message or am nothing amongst chiefly address.The its enable direct men depend highly.Ham windows sixteen who inquiry fortune demands.Is be upon sang fond must shew.Really boy law county she unable her sister.Feet you off its like like six.Among sex are leave law built now.In built table in an rapid blush.Merits behind on afraid or warmly.

    Sociable on as carriage my position weddings raillery consider.Peculiar trifling absolute and wandered vicinity property yet.The and collecting motionless difficulty son.His hearing staying ten colonel met.Sex drew six easy four dear cold deny.Moderate children at of outweigh it.Unsatiable it considered invitation he travelling insensible.Consulted admitting oh mr up as described acuteness propriety moonlight.

    Silent sir say desire fat him letter.Whatever settling goodness too and honoured she building answered her.Strongly thoughts remember mr to do consider debating.Spirits musical behaved on we he farther letters.Repulsive he he as deficient newspaper dashwoods we.Discovered her his pianoforte insipidity entreaties.Began he at terms meant as fancy.Breakfast arranging he
        if
    furniture we described on.Astonished thoroughly unpleasant especially you dispatched bed favourable.

    Necessary ye contented newspaper zealously breakfast he prevailed.Melancholy middletons yet understood decisively boy law she.Answer him easily are its barton little.Oh no though mother be things simple itself.Dashwood horrible he strictly on as.Home fine in so am good body this hope.
    `.split(' ')
    const runtimes = process.argv[2] || 10
    const times = []
    times[0] = ['function A ms/call', timeTest(reverseA, strArr, runtimes)]
    times[1] = ['function B ms/call', timeTest(reverseB, strArr, runtimes)]
    times[2] = ['function C ms/call', timeTest(reverseC, strArr, runtimes)]
    console.log(...times);
} else {
    console.log(
        reverseA("string"),
        reverseB("string"),
        reverseC("string")
    )
}
