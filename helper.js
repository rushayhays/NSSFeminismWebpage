const notInventors = ["Ada Lovelace", "Florence Parpart", "Margaret A. Wilcox","Elizabeth Magie", "Anna Connelly","Maria Beasley" ]

const ladyFormatterDark = (ladyObj) => {
    const notInventors = ["Ada Lovelace", "Florence Parpart", "Margaret A. Wilcox","Elizabeth Magie", "Anna Connelly","Maria Beasley" ]
    if(notInventors.includes(ladyObj.inventor)){
        return `
        <section class="ladies dark">
            <div class="inventorBox">
                <h2>Inventor: ${ladyObj.inventor}</h2>
                <h3>Invention ${ladyObj.invention}</h3>
            </div>
            <div class="falseBox">
                <h2>FALSE<h2>
            </div>
        </section>
    
        `
    } else {
        return `
        <section class="ladies dark">
            <div class="inventorBox">
                <h2>Inventor: ${ladyObj.inventor}</h2>
                <h3>Invention ${ladyObj.invention}</h3>
            </div>
            <div class="trueBox">
                <h2>TRUE<h2>
            </div>
        </section>
    
        `
    } 
}

const ladyFormatterMedium = (ladyObj) => {
    const notInventors = ["Ada Lovelace", "Florence Parpart", "Margaret A. Wilcox","Elizabeth Magie", "Anna Connelly","Maria Beasley" ]
    if(notInventors.includes(ladyObj.inventor)){
        return `
        <section class="ladies medium">
            <div class="inventorBox">
                <h2>Inventor: ${ladyObj.inventor}</h2>
                <h3>Invention ${ladyObj.invention}</h3>
            </div>
            <div class="falseBox">
                <h2>FALSE<h2>
            </div>
        </section>
    
        `
    }  else {
        return `
        <section class="ladies medium">
            <div class="inventorBox">
                <h2>Inventor: ${ladyObj.inventor}</h2>
                <h3>Invention ${ladyObj.invention}</h3>
            </div>
            <div class="trueBox">
                <h2>TRUE<h2>
            </div>
        </section>
    
        `
    } 
}

const ladyFormatterLight = (ladyObj) => {
    const notInventors = ["Ada Lovelace", "Florence Parpart", "Margaret A. Wilcox","Elizabeth Magie", "Anna Connelly","Maria Beasley" ]
    if(notInventors.includes(ladyObj.inventor)){
        return `
        <section class="ladies light">
            <div class="inventorBox">
                <h2>Inventor: ${ladyObj.inventor}</h2>
                <h3>Invention ${ladyObj.invention}</h3>
            </div>
            <div class="falseBox">
                <h2>FALSE<h2>
            </div>
        </section>
    
        `
    } else {
        return `
        <section class="ladies light">
            <div class="inventorBox">
                <h2>Inventor: ${ladyObj.inventor}</h2>
                <h3>Invention ${ladyObj.invention}</h3>
            </div>
            <div class="trueBox">
                <h2>TRUE<h2>
            </div>
        </section>
    
        `
    } 
}


const colorFormatter = (arr, item) => {
    let colorNum = arr.indexOf(item)
    if(colorNum % 3 === 0){
        return ladyFormatterDark(item)
    } else if(colorNum % 2 === 0){
        return ladyFormatterMedium(item)
    } else {
        return ladyFormatterLight(item)
    }
}

export  const ladyWriter = (arr) => {
   const docPosition = document.querySelector(".ladiesHere")
   let docElem = "";
   for(const item of arr){
        docElem += colorFormatter(arr, item)
    }
    docPosition.innerHTML = `${docElem}`

}