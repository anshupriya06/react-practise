export default function price({oldPrice , newPrice}){
   let oldstyles = {
    textDecorationLine : "line-through",
   };
   
   let newstyles = {
        fontWeight : "bold",
   };
   let styles = {
        backgroundColor : "red",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",
   };
   
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
        
    );
};

