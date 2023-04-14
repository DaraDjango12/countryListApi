// country api

const countArr=[]
let url="https://restcountries.com/v2/all"
fetch(url)

.then((fresh)=>{
    return fresh.json()

})
.then((fresher)=>{
    // console.log(fresher.length,"help")

    countryDo(fresher)

})

function countryDo(mine){
     console.log(mine, "mineeer")
    const country = document.getElementsByClassName("collectCorrect")[0]
     let content=""
     mine.map((product)=>{
        // const { name,flag,nativeName,currencies} = product
        console.log(product.name)
        content +=`
        <div class="collect">
            <div class="imageDiv ">
                <p>Flags:</p><img src="${product.flag}" alt="">
            </div>
            <div class="nativeNames">
                <p class="nativeName"> C0untry :"${product.capital}"</p>
                <p class="currencies">"${product.nativeName}"</p>
                <p class="name">"${product.name}"</p>
            </div>
        </div>
        `
     })

     country.innerHTML=content

}
