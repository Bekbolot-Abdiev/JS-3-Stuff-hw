const list=document.querySelector('#list')
const root=document.querySelector('#root')
const root2=document.querySelector('#root2')
const urlStuff='https://fakestoreapi.com/products'

async function getProducts() {
    const res=await fetch(urlStuff)
    const data=await res.json()
    console.log(data);
    renderCategory(data)
    renderProducts(data.slice(0,5))
}
getProducts()
function renderCategory(arr) {
    const newCategories=[]
    const filterCategory=arr.filter(el=>{
        if(!newCategories.includes(el.category)) {
            newCategories.push(el.category)
        }
    })


    for (const obj of newCategories) {
        list.innerHTML+=`<li onclick='getProductsByCategory(event)'>
        <h3>${obj}</h3>
        </li>`
    }
}

function renderProducts(arr) {
    root.innerHTML=''
    for (const obj of arr) {
        const box=document.createElement('div')
        root.appendChild(box)
        box.classList='box'
        box.innerHTML=`
        <img width='180px' src='${obj.image}'/>
        <h2>${obj.title}</h2>
        <p>${obj.category}</p>
        <h3>${obj.price}$</h3>
        `
    }

}

async function getProductsByCategory(nameCateg) {
    const c=nameCateg.target.innerText
    const res=await fetch(urlStuff)
    const data=await res.json()
    const filterData=data.filter(el=>el.category===c)
    console.log(filterData);
    renderProducts(filterData.slice(0,5))
}

//

function renderPrice(arr) {
    root2.innerHTML=''
    for (const obj of arr) {
        const box2=document.createElement('div')
        root2.appendChild(box2)
        box2.classList='box'
        box2.innerHTML=`
        <img width='180px' src='${obj.image}'/>
        <h2>${obj.title}</h2>
        <p>${obj.category}</p>
        <h3>${obj.price}$</h3>
        `
    }

}

async function getProductsByPrice() {
    const res=await fetch(urlStuff)
    const data=await res.json()
    const filterPrice=data.filter (money=>money.price < 100)
    console.log(filterPrice);
    renderPrice(filterPrice)
    
}
getProductsByPrice()



