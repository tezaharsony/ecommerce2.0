var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    var modal = document.getElementById('modal');
    console.log(modal);
     var elements = document.getElementsByClassName('toggle-modal');
     for (var i = 0; i < elements.length; i++) {
       elements[i].addEventListener('click', toggleClass);
     }

     function toggleClass() {
     modal.classList.toggle('is-active');
     }


     var app = new Vue({
       el: "#app",
       data: {
         items: "",
         carts : [],
         showCart: false,
         verified: false,
         toggle: false,
         modalClass: 'modal',
         modalCartClass: 'modal',
         modalSignUpClass: 'modal',
         detail: {
           price: "",
           image: ""
         },
         signup: {
           username: "",
           password: ""
         },
         isLogin: false,
         itemsId : [],
         Username: "User"
       },
       created (){
         axios.get(`http://localhost:3000/items`)
         .then(result => {
           this.items = result.data
           console.log(result);
         })
         this.CheckisLogin()
       },
       computed: {
         total() {
           var total = 0;
           for(var i = 0; i < this.carts.length; i++) {
             total += this.carts[i].price;
           }
           return total;
         }
       },
       methods: {
         addToCart(cart) {
           cart.quantity += 1;
           this.carts.push(cart);
           this.itemsId.push(cart._id)
         },
         removeFromCart(cart) {
           carts.quantity -= 1;
           this.carts.splice(this.carts.indexOf(cart), 1);
         },
         showDetail(item) {
           this.detail = item
         },
         showModal(item) {
           this.modalClass = "modal is-active"
           this.detail = item
         },
         hideModal(){
           this.modalClass = "modal"
         },
         showModalCart() {
           this.modalCartClass = "modal is-active"
         },
         hideModalCart() {
           this.modalCartClass = "modal"
         },
         showModalSignUp() {
           this.modalSignUpClass = "modal is-active"
         },
         hideModalSignUp() {
           this.modalSignUpClass = "modal"
         },
         CheckisLogin() {
          if (localStorage.getItem("token") !== null) {
            this.isLogin = true
            this.Username = localStorage.getItem("userame")
          }
        },
        Logout() {
          localStorage.removeItem("token")
          this.isLogin = false
          window.location.href="index.html"
        },
        addTransaction() {
          console.log('ini method addTransaction!');
          var self = this
          axios({
            method : "post",
            url : "http://localhost:3000/transactions/",
            data : {
              itemsId: self.itemsId
            },
            headers : {
              token : localStorage.getItem("token")
            }
          })
          .then(data => {
            console.log(data.data.items.length);
            alert(`your have ${data.data.items.length} items is store to database`)
          })
          .catch(err => {
            console.log(err);
          })
        }
       }
     })
