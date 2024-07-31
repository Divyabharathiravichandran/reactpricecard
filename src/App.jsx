import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Card from "./Card";
import Header from "./Header";
import Heading from "./Heading";

function App() {
  const cards = [
    {
      plan: "Free",
      price: 0,
      features: [
        {
          name: "10 users included",
          enable : true
        },
        {
          name: "2 GB of storage",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Email support",
          enable : false
        },
        {
          name: "Help center access",
          enable : false
        },
        {
          name: "Unlimited private project",
          enable : false
        },
        {
          name: "Free subdomain",
          enable : false
        },
        {
          name: "Monthly status report",
          enable : false
        },
      ],
    },
    {
      plan: "Pro",
      price: 15,
      features: [
        {
          name: "20 users included",
          enable : true
        },
        {
          name: "10 GB of storage",
          enable : true
        },
        {
          name: "Priority email support",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Help center access",
          enable : true
        },
        {
          name: "Unlimited private project",
          enable : false
        },
        {
          name: "Free subdomain",
          enable : false
        },
        {
          name: "Monthly status report",
          enable : false
        },
      ],
    },
    {
      plan: "Enterprise",
      price: 29,
      features: [
        {
          name: "40 users included",
          enable : true
        },
        {
          name: "15 GB of storage",
          enable : true
        },
        {
          name: "Phone and email support",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Help center access",
          enable : true
        },
        {
          name: "Unlimited private project",
          enable : true
        },
        {
          name: "Free subdomain",
          enable : true
        },
        {
          name: "Monthly status report",
          enable : true
        },
      ],
    },
  ];
  return (
    <div className="container">
      <Header />
      <Heading />
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;