function CounterClick(){
  
    var [products,setProducts]=React.useState([
      { name:"Rolex", qty: 0 , price:6020},
      { name:"OMEGA ", qty: 0 ,price:7000},
      { name:"Audemars Piguet", qty: 0 ,price:1000},
      { name:"Titan", qty: 0 ,price:10000},
      { name:"Patek Philippe", qty: 0 , price:15000},
      { name:"Hublot Navitimer", qty: 0 , price:1800},
      { name:"TAG Heuer Carrera", qty: 0 , price:5000}
      
    ]);
     var totalQty=()=>{
       var total=0;
       products.forEach(item => {
         total +=item.qty;
       });
       return total;
     };
  
    var totalAmount = () =>{
      var amount =0;
      products.forEach(item => {
        amount += item.qty * item.price ;
      });
      return amount;
    }
    
    const manageQty = (index,qty) =>{
      var change =[...products];
      change[index]={...change[index], qty: qty};
      setProducts(change);
    }
    
    return(
      <div>
        <h1>Cart Items </h1>
        { 
          products?.map((item,index) => 
          <div key={index}>
         
              <h3>{item.name} Qty :{item.qty}  Price :{item.price}</h3>
              <button style={{ backgroundColor: "Green", color:"white",fontfamily:"italic"}} onClick={ () => manageQty(index,item.qty +1)}>Add Coffee</button>
              <button style={{ backgroundColor: "Red", color:"white"}} onClick= {() => item.qty == 0 ? 0 : manageQty(index,item.qty -1)}>Remove to cart </button>    
          </div>
         )
       }
      
        <h3 style={{ backgroundColor: "Purple", color:"white"}} >Total Quantity :{totalQty()} </h3>
        <h3 style={{ backgroundColor: "Blue", color:"white"}} >Total Amount : {totalAmount()}</h3>
    </div>
    );
  }
  ReactDOM.render(
    <CounterClick/>,
    document.getElementById('root')
  );