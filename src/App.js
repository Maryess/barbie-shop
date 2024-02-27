
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items  from "./components/items"
import Category from "./components/Category"
import ShowFullItem from "./components/ShowFullItem"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders:[

      ],
      currentItems:[],
      items: [
        {
        id:1,
        title:'Barbie Signature Pink Collection 5',
        img:'Barbie Signature Pink Collection 5.jpg',
        desc:'Klassischer Barbie-Glamour trifft auf trendige Mode in der atemberaubenden Barbie Pink Collection. Unsere fünfte Puppe ist die erste asiatische Barbie in dieser Serie.',
        category:'dolls',
        price:'134,99'
        },
        {
          id:2,
          title:'Die Barbie-Puppe',
          img:'Die Barbie-Puppe Zum Film.jpg',
          desc:'Margot Robbie Als Barbie, Inlineskating-Sammelpuppe Mit Gymnastikanzug, Biker-Shorts Und Inlineskates.',
          category:'dolls',
          price:'49,99'
          },
          {
            id:3,
            title:'2023 Holiday Barbie-Poppe',
            img:'2023 Holiday Barbie-Puppe.jpg',
            desc:'Saisonales Sammlergeschenk, Goldenes Kleid Und Blondes Haar.',
            category:'dolls',
            price:'134,99'
            },
            {
              id:4,
              title:'Barbie Signature the Movie,Ken Puppe',
              img:'Barbie Signature The Movie, Ken Puppe.jpg',
              desc:' Ken Puppe mit gestreiftem Strand-Outfit in Pastellrosa und Grün, Surfbrett und weißen Turnschuhen.',
              category:'dolls',
              price:'49,99'
              },
              {
                id:5,
                title:'Barbie Signature Pink Collection 5',
                img:'Barbie Signature Pink Collection 5.jpg',
                desc:'Klassischer Barbie-Glamour trifft auf trendige Mode in der atemberaubenden Barbie Pink Collection. Unsere fünfte Puppe ist die erste asiatische Barbie in dieser Serie.',
                category:'dolls',
                price:'134,99'
                }
                
 
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    // Благодаря этому методу можно взаимодецствовать с функцией, добавляя туа различные функционалы
  } 
  render(){
      return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder }/>
          <Category chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd ={this.addToOrder}/>
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
          <Footer/>
        </div>
      );
  }

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems:this.state.items})
      return
    }

    this.setState({
      currentItems:this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders:this.state.orders.filter(el => el.id !== id )})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
      })
      if(!isInArray)
        this.setState({orders: [...this.state.orders, item ]})
      
    

   
  }
}

export default App;
