const btn = document.querySelector(".btn")
btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET','peoples.json') 
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        const wrapper = document.querySelector('.wrapper')

        data.forEach((item, index) => {
            const userCard = document.createElement('div')
            userCard.setAttribute('class', 'usercard')

            userCard.innerHTML = `
            <img src="../images/user.png" alt="">
            <h2>${item.name} № ${index + 1}</h2>
            <span>age:${item.age}</span>
            `
            wrapper.append(userCard)
        })
    })
})


const show = new XMLHttpRequest()
show.open('GET', 'dz-2.json')
show.setRequestHeader('Content-type', 'application/json')
show.send()
show.addEventListener('load', () => {
    const parse = JSON.parse(show.response)
    console.log(parse)
})
