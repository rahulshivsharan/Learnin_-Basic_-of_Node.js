function Rectangle(length,breadth){
        function area(){
                return length * breadth;
        };

        return {
                rectangleArea : area
        };
};

module.exports = Rectangle;
