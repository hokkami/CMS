let xAxisData = [
    {
        "name": "فروردین",
        "sale": 112_000
    },
    {
        "name": "اردیبهشت",
        "sale": 115_000
    },
    {
        "name": "خرداد",
        "sale": 160_000
    },
    {
        "name": "تیر",
        "sale": 12_000
    },
    {
        "name": "مرداد",
        "sale": 73_000
    },
    {
        "name": "شهریور",
        "sale": 500_000
    },
    {
        "name": "مهر",
        "sale": 250_000
    },
    {
        "name": "آبان",
        "sale": 312_000
    },
    {
        "name": "آذر",
        "sale": 50_000
    },
    {
        "name": "دی",
        "sale": 0
    },
    {
        "name": "بهمن",
        "sale": 100_000
    },
    {
        "name": "اسفند",
        "sale": 19_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'رضا',
        title: 'برنامه نویس وب',
        img: 'Image/Aks.jpg'
    },
    {
        id: 2,
        username: 'روزبه',
        title: 'طراح گرافیکی',
        img: 'Image/Aks.jpg'
    },
    {
        id: 3,
        username: 'شایان',
        title: 'گیمر',
        img: 'Image/Aks.jpg'
    },
    {
        id: 4,
        username: 'علی',
        title: 'مدیر پروژه',
        img: 'Image/Aks.jpg'
    },
]

const transactions=[
    {
        id: 1 , 
        customer:'رضا حکامی',
        date:'12 مهر 1400',
        amout:123,
        status:'Declined',
        img:'Image/Aks.jpg'
    },
    {
        id: 2 , 
        customer:'علی افراسیابی',
        date:'12 مرداد 1400',
        amout:123,
        status:'Pending',
        img:'Image/Aks.jpg'
    },
    {
        id: 3 , 
        customer:'روزبه حکامی',
        date:'12 تیر 1400',
        amout:123,
        status:'Declined',
        img:'Image/Aks.jpg'
    },
    {
        id: 4 , 
        customer:'شایان افراسیابی',
        date:'12 فروردین 1400',
        amout:123,
        status:'Approved',
        img:'Image/Aks.jpg'
    },
]

const userRows =[
    {
    id:1,
    username:'رضا حکامی قاسمی',
        avatar: 'Image/Aks.jpg',
        status:'active',
        transaction:'1029.50 $',
        email:'r.hokkami@gmail.com'
    },
    {
    id:2,
    username:'ali ehsani',
        avatar: 'Image/Aks.jpg',
        status:'active',
        transaction:'19.50 $',
        email:'r.hokkami@gmail.com'
    },
    {
    id:3,
    username:'farhad faraji',
        avatar: 'Image/Aks.jpg',
        status:'active',
        transaction:'500.50 $',
        email:'r.hokkami@gmail.com'
    },
    {
    id:4,
    username:'emad khalili',
        avatar: 'Image/Aks.jpg',
        status:'non-active',
        transaction:'98 $',
        email:'r.hokkami@gmail.com'
    },
]

let products =[
    {
        id:1,
        title:'asus',
        avatar:'Image/G-Shock.jpg',
        price:1200,
    },
    {
        id:2,
        title:'LG',
        avatar:'Image/Edifice.jpg',
        price:1100,
    },
    {
        id:3,
        title:'MSI',
        avatar:'Image/GA-100-1A2ER.jpg',
        price:890,
    },
    {
        id:4,
        title:'HP',
        avatar:'Image/Protrek.jpg',
        price:1000,
    }
]

const productData =[
    {
        name:'فروردین',
        sales: 4000
    },
    {
        name:'اردیبهشت',
        sales: 3000
    },
    {
        name:'خرداد',
        sales: 5000
    },

]

export { xAxisData ,newMembers, transactions ,userRows,products  , productData};