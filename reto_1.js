const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)

function wrapping(gifts) {
    if(gifts !== 0){
      return gifts.map( item => 
            `${'*'.repeat(item.length+2)} \n *${item}* \n${'*'.repeat(item.length+2)}`
        )
    }
}
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */