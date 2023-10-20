import { defineStore } from 'pinia'
import db from '@/data/db'
export const dbproducts = defineStore('dbdb', {
    state: () => {
        return {
            dbpro: db,
            carts: []
        }
    },
    getters: {
        getallproductcart(){
            return this.carts
        }
    },
    actions: {
        getproduct(id) {
            return this.dbpro[id]
        },
        add(product, cunt) {
            let pr = ((product.price * product.discunt)/100) * cunt
            let productcart = {
                id: product.id,
                title : product.title,
                price : pr,
                discunt : product.discunt,
                rating : product.rating,
                imgs : product.imgs,
                disc : product.disc,
            }
            this.carts.push(productcart)
        },
        rimove(id){
            let proindex = this.carts.findIndex(item => item.id === id)
            this.carts.splice(proindex,1)
        }
    }
})


