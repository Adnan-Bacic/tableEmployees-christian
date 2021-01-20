new Vue({
    el: "#main",
    data: {
      heading: "Staff Directory",
      sortBy: 'department',
      employees: [
                  {
                      "firstName": "amelia",
                      "lastName": "austin",
                      "photoUrl": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
                      "email": "amelia.austin@example.com",
                      "phone": "(651)-507-3705",
                      "department": "Engineering"
                  },
                  {
                      "firstName": "bobbie",
                      "lastName": "murphy",
                      "photoUrl": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
                      "email": "bobbie.murphy@example.com",
                      "phone": "(925)-667-7604",
                      "department": "Management"
                  },
                  {
                      "firstName": "kristin",
                      "lastName": "terry",
                      "photoUrl": "https://randomuser.me/api/portraits/thumb/women/45.jpg",
                      "email": "kristin.terry@example.com",
                      "phone": "(021)-544-1184",
                      "department": "Sales"
                  },
                  {
                      "firstName": "brandon",
                      "lastName": "griffin",
                      "photoUrl": "https://randomuser.me/api/portraits/thumb/men/59.jpg",
                      "email": "brandon.griffin@example.com",
                      "phone": "(509)-317-9506",
                      "department": "Management"
                  },
                  {
                      "firstName": "tammy",
                      "lastName": "gibson",
                      "photoUrl": "https://randomuser.me/api/portraits/thumb/women/72.jpg",
                      "email": "tammy.gibson@example.com",
                      "phone": "(815)-727-0663",
                      "department": "Support"
                  },
        ]
      },
          computed: {
              sortedEmployees() {
                  //The localeCompare method returns a number indicating whether str1 comes before, after or is the same as str2 in sort order.
                  //The method returns the same numbers as a and b: -1, 1 or 0
                  return this.employees.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
              }
          }, 
          created(){

            let randomNumbers = [1,2,121];
            console.log("sorting normal")
            console.log(randomNumbers.sort());
/*
            When you sort an array with .sort(), it assumes that you are sorting strings.
            When sorting numbers, the default behavior will not sort them properly.

            This will only sort strings: 
            console.log(randomNumbers.sort());

            The function that you pass tells how to sort the elements. 
            It takes two parameters (a and b) that represent any two elements 
            from the array. How the elements will be sorted depends on the function’s return value:

            if it returns a negative value, the value in a will be ordered before b.
            if it returns 0, the ordering of a and b won’t change.
            if it returns a positive value, the value in b will be ordered before a.
            When you pass the function (a, b) => a - b, you’re telling the .sort() 
            function to sort the numbers in ascending order.
*/
            const sortedRandomNumbers = randomNumbers.sort((a,b) => {
                return a-b //Sorts from small to large
             })
     
             console.log(sortedRandomNumbers);
     
             const sortedRandomNumbers1 = randomNumbers.sort((a,b) => {
                 return b-a //Sorts from large to small
              })
              console.log(sortedRandomNumbers1);
          }
      });