import TodoList from './assets/toDos/TodoList'
import ProductList from './assets/onlineShop/ProductList'
import './App.scss'

const toDos=[
  'Buy Grocerys',
  'Send Email',
  'Finish Assignment',
  'Write Blog',
  'Bake Cake'
]

const products= [
  {
    image:"https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    title: "cocooil",
    price: "$30",
  },
  {
    image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Irgendwas",
    price: "$60",
  },
  {
    image:"https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
    title: "Was was",
    price: "$20",
  },
]

function App() {

  return (
    <>
      <section>
        <h1>My Todos</h1>
        <article>
        <TodoList toDosArr={toDos}/>
        </article>
      </section>
      <section className='onlineShop'>
        <h1>My online Shop</h1>
       <ProductList productsArr ={products}/>
      </section>
    </>
  )
}

export default App
