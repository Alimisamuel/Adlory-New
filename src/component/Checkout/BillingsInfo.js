import React, { useRef, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import emailjs from "emailjs-com";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const darkTheme = createTheme({
	palette: {
	  primary: {
		main: "#e07038",
	  },
	},
  });

const BillingsInfo = (props) => {

	const shippingPrice = () =>{
        if (country === "Benin"){
            return 25934
        }
        else if(country === "Australia"){
return 41305
        }
        else if (country === "Canada"){
            return 28644
        }
        else if (country === "France"){
            return 33325
        }
        else if (country === "Ghana"){
            return 25934
        }
        else if (country === "United States (US)"){
            return 28644
        }
        else if (country === "Saudi Arabia"){
            return 37020
        }
        else if (country === "United Kingdom (UK)"){
            return 23347
        }
        else if (country === "Sierra Leone"){
            return 25934
        }
        else {
            return 0
        }
    }

	const handlePayStack = (e) =>{
		e.preventDefault()
	}

	const NigeriaPrice = () =>{
		if(stat === "ABIA"){
			return 3000
		}
		else if(stat === "ADAMAWA"){
			return 3000
		}
		else if(stat === "AKWA IBOM"){
			return 3000
		}
		else if(stat === "ANAMBRA"){
			return 3000
		}
		else if(stat === "BAUCHI"){
			return 2200
		}
		else if(stat === "BAYELSA"){
			return 2200
		}
		else if(stat === "BENUE"){
			return 2200
		}
		else if(stat === "BORNO"){
			return 2200
		}
		else if(stat === "CROSS RIVER"){
			return 2200
		}
		else if(stat === "DELTA"){
			return 3000
		}
		else if(stat === "EBONYI"){
			return 3850
		}
		else if(stat === "EDO"){
			return 3000
		}
		else if(stat === "EKITI"){
			return 3000
		}
		else if(stat === "ENUGU"){
			return 3000
		}
		else if(stat === "FCT"){
			return 3000
		}
		else if(stat === "GOMBE"){
			return 3000
		}
		else if(stat === "IMO"){
			return 3000
		}
		else if(stat === "JIGAWA"){
			return 3000
		}
		else if(stat === "KADUNA"){
			return 3000
		}
		else if(stat === "KANO"){
			return 3000
		}
		else if(stat === "KATSINA"){
			return 3000
		}
		else if(stat === "KEBBI"){
			return 3000
		}
		else if(stat === "KOGI"){
			return 3000
		}
		else if(stat === "KWARA"){
			return 3000
		}
		else if(stat === "LAGOS"){
			return 3000
		}
		else if(stat === "NASSARAWA"){
			return 3000
		}
		else if(stat === "NIGER"){
			return 3000
		}
		else if(stat === "OGUN"){
			return 3000
		}
		else if(stat === "ONDO"){
			return 3000
		}
		else if(stat === "OSUN"){
			return 3000
		}
		else if(stat === "OYO"){
			return 3000
		}
		else if(stat === "PLATEAU"){
			return 3000
		}
		else if(stat === "RIVERS"){
			return 3000
		}
		else if(stat === "SOKOTO"){
			return 3000
		}
		else if(stat === "TARABA"){
			return 3000
		}
		else if(stat === "YOBE"){
			return 3000
		}
		else if(stat === "ZAMFARA"){
			return 3000
		}
	}
	

  const [country, setcountry] = React.useState('');
  const [stat, setStat] = React.useState('');


  const history = useHistory();
  let carts = useSelector((state) => state.products.carts);


  let cart_detail_for_email = carts.map((item) => {
    return (
      <div style={{ display: "none" }}>
        <input value={item.title +  " "} name="item_name" />
        <input value={item.price +  " "} name="item_price" />
        <input value={item.quantity +  ""} name="item_quantity" />
        <input value={item.quantity +  ""} name="item_quantity" />
        <input value={item.quantity +  ""} name="item_quantity" />
      </div>
    );
  });

  const cartTotal = () => {
    return carts.reduce(function (total, item) {
      return total + (item.quantity || 1) * item.price;
    }, 0);
  };



  const price = shippingPrice()
//   const  Amount = cartTotal()  + 150 + price
//   console.log(Amount , "Sammy", price, cartTotal())



const NigPrice = NigeriaPrice()

  const [email, setEmail] = useState("");

  const formRef = useRef();
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: cartTotal() * 100 + 150 * 100 + price * 100 + NigPrice * 100,
    publicKey: "pk_live_78f5548212e877898dd29eff6de6d4229952892d",
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_wnvavie",
        "template_nz80n82",
        formRef.current,
        "Tj0n7EmWjCanLAW8Z"
      )
      .then(
        (result) => {
          alert(
            "Your Request is now being processed and you should get a response mail shortly"
          );
        },
        (error) => {
          console.log(error.text);
          alert(
            "There was an error trying to process your message, refresh your browser and try again!"
          );
        }
      );
  };
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    // alert("about to send email");
    sendEmail();
    alert("Order sent,  Please contact Adlory");
    history.push("/invoice-one");
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Make Payment",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
	    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="checkout-area-bg bg-white">
          <div className="check-heading">
            <h3>Billings Information</h3>
          </div>
          <div className="check-out-form">
            <form method="post" ref={formRef}>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                  <div className="form-group">
                    <label htmlFor="fname">
                      First name<span className="text-danger">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      required=""
                      className="form-control"
                      id="fname"
                      placeholder="First name"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                  <div className="form-group">
                    <label htmlFor="lname">
                      Last name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required=""
                      className="form-control"
                      id="lname"
                      placeholder="Last name"
                      name="last_name"
                    />
                  </div>
                </div>
                {/* cart data mapped to be sent do emailJS */}
                {cart_detail_for_email}
                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      required
                      type="email"
                      id="email"
					  
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@gmail.com"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                  <div className="form-group">
                    <label htmlFor="email">
                      Phone Number<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      required=""
                      type="email"
                      id="phone_number"
                      // onChange={(e) => setEmail(e.target.value)}
                      placeholder="your phone number"
                      name="phone_number"
                    />
                  </div>
                </div>




                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                  <div className="form-group">
                    <Autocomplete
					//   value={country}
					//   onChange={(event, newValue) => {
					// 	setCountry(newValue);
					//   }}
					  country={country}
					  onInputChange={(event, newcountry) => {
						setcountry(newcountry);
						props.onRegionChange(newcountry)
					  }}
                      disablePortal
                      size="small"
                      id="combo-box-demo"
                      options={countries}
					
                      sx={{ border: "none" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country/Region"
                          required
                      
                        />
                      )}
                    />
                 
                  </div>
				  { country === "Australia" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={australias}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>

				   <div className="form-group">
				   <label htmlFor="email">
					 Full  Address<span className="text-danger">*</span>
				   </label>
				   <input
					 className="form-control"
					 required=""
					 type="email"
					 id="email"
					 onChange={(e) => setEmail(e.target.value)}
					 placeholder="House No | Street Name | ..."
					 name="email"
				   />
				 </div>
				 </>
				 
				 :
			null
				}
				  { country === "Benin" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={Benin}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 
				 :
			null
				}
				  { country === "Canada" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={Canada}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				   
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 :
			null
				}
				  { country === "France" ?
				   <div className="form-group">
					
				   <label htmlFor="email">
					 Full  Address<span className="text-danger">*</span>
				   </label>
				   <input
					 className="form-control"
					 required=""
					 type="email"
					 id="email"
					 onChange={(e) => setEmail(e.target.value)}
					 placeholder="House No | Street Name | ..."
					 name="email"
				   />
			
				 
				 </div>
				 
				 :
			null
				}
				  { country === "Ghana" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={Ghana}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 
				 :
			null
				}
				  { country === "Nigeria" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 stat={stat}
					 size="small"
					 id="combo-box-demo"
					 onInputChange={(event, newStat) => {
						setStat(newStat);
						props.onStatChange(newStat)
					  }}
					 options={Nigeria}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 :
			null
				}
				  { country === "United States (US)" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={us}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 :
			null
				}
				  { country === "Saudi Arabia" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={Saudi}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 :
			null
				}
				  { country === "United Kingdom (UK)" ?
				  <>
				   <div className="form-group">
				   <Autocomplete
					 disablePortal
					 size="small"
					 id="combo-box-demo"
					 options={uk}
					 sx={{ border: "none" }}
					 renderInput={(params) => (
					   <TextField {...params} label="State" required />
					 )}
				   />
				 </div>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 :
			null
				}
				  { country === "Sierra Leone" ?
				  <>
				 	   <div className="form-group">
						<label htmlFor="email">
						  Full  Address<span className="text-danger">*</span>
						</label>
						<input
						  className="form-control"
						  required=""
						  type="email"
						  id="email"
						  onChange={(e) => setEmail(e.target.value)}
						  placeholder="House No | Street Name | ..."
						  name="email"
						/>
					  </div>
					  </>
				 
				 :
			null
				}
          
                </div>
                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                  <div className="form-group">
                    <label htmlFor="messages">
                      Additional Notes<span className="text-danger"></span>
                    </label>
                    <textarea
                      rows="5"
                      className="form-control"
                      id="messages"
                      placeholder="Order notes"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="materialUnchecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="materialUnchecked"
                    >
                      Save In Address Book
                    </label>
                  </div>
                </div>
              </div>
          
          
        
                <PaystackButton {...componentProps}  className='btn paystack_btn ' onClick={handlePayStack}  />
              
            </form>
          </div>
        </div>
      </div>
	  </ThemeProvider>
    </>
  );
};

export default BillingsInfo;
// export default Price



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const countries = [
  {
    label: "Australia",
    price: 41305,
  },
  {
    label: "Benin",
    price: 25934,
  },
  {
    label: "Canada",
    price: 28644,
  },
  {
    label: "France",
    price: 33325,
  },
  {
    label: "Ghana",
    price: 25934,
  },
  {
    label: "Nigeria",
    price: 8,
  },
  {
    label: "United States (US)",
    price: 28644,
  },
  {
    label: "Saudi Arabia",
    price: 37020,
  },
  {
    label: "United Kingdom (UK)",
    price: 23347,
  },
  {
    label: "Sierra Leone",
    price: 25934,
  },
];

const australias = [
  {
    label: "Australian Capital",
  },
  {
    label: "Territory",
  },
  {
    label: "New South Territory",
  },
  {
    label: "Northern Territory",
  },
  {
    label: "Queensland",
  },
  {
    label: "South Australia",
  },
  {
    label: "Tasmania",
  },
  {
    label: "Victoria",
  },
  {
    label: "Western Australia",
  },
];
const Benin = [
  {
    label: "Alibori",
  },
  {
    label: "Atakora",
  },
  {
    label: "Atlantique",
  },
  {
    label: "Borgou",
  },
  {
    label: "Collines",
  },
  {
    label: "Kouffo",
  },
  {
    label: "Donga",
  },
  {
    label: "Littoral",
  },
  {
    label: "Mono",
  },
  {
    label: "Oueme",
  },
  {
    label: "Plateau",
  },
  {
    label: "Zou",
  },
];
const Canada = [
  {
    label: "Alberta",
  },
  {
    label: "British Columbia",
  },
  {
    label: "Manitoba",
  },
  {
    label: "New Brunswick",
  },
  {
    label: "Newfoundland and Labrador",
  },
  {
    label: "Northwest Territories",
  },
  {
    label: "Nunavut",
  },
  {
    label: "Ontario",
  },
  {
    label: "Prince Edward Island",
  },
  {
    label: "Quebec",
  },
  {
    label: "Saskatchewan",
  },
  {
    label: "Yukon Territory",
  },
];

const Ghana = [
  {
    label: "Ashanti",
  },
  {
    label: "Brong-Ahafo",
  },
  {
    label: "Bono",
  },
  {
    label: "Bono East",
  },
  {
    label: "Central",
  },
  {
    label: "Eastern",
  },
  {
    label: "Greater Accra",
  },
  {
    label: "North East",
  },
  {
    label: "Northern",
  },
  {
    label: "Oti",
  },
  {
    label: "Savannah",
  },
  {
    label: "Upper East",
  },
  {
    label: "Volta",
  },
  {
    label: "Western",
  },
  {
    label: "Western North",
  },
 
];
const Nigeria = [
  {
    label: "ABIA",
  },
  {
    label: "ADAMAWA",
  },
  {
    label: "AKWA IBOM",
  },
  {
    label: "ANAMBRA",
  },
  {
    label: "BAUCHI",
  },
  {
    label: "BAYELSA",
  },
  {
    label: "BENUE",
  },
  {
    label: "BORNO",
  },
  {
    label: "CROSS RIVER",
  },
  {
    label: "DELTA",
  },
  {
    label: "EBONYI",
  },
  {
    label:" EDO",
  },
  {
    label: "EKITI",
  },
  {
    label: "ENUGU",
  },
  {
    label: "FCT",
  },
  {
    label: "GOMBE",
  },
  {
    label: "IMO",
  },
  {
    label: "JIGAWA",
  },
  {
    label: "KADUNA",
  },
  {
    label: "KANO",
  },
  {
    label: "KATSINA",
  },
  {
    label: "KEBBI",
  },
  {
    label: "KOGI",
  },
  {
    label: "KWARA",
  },
  {
    label: "LAGOS",
  },
  {
    label: "NASSARAWA",
  },
  {
    label: "NIGER",
  },
  {
    label: "OGUN",
  },
  {
    label: "ONDO",
  },
  {
    label: "OSUN",
  },
  {
    label: "OYO",
  },
  {
    label: "PLATEAU",
  },
  {
    label: "RIVERS",
  },
  {
    label: "SOKOTO",
  },
  {
    label: "TARABA",
  },
  {
    label: "YOBE",
  },
  {
    label: "ZAMFARA",
  },
];
const us = [
  {
    label: "Alabama",
  },
  {
    label: "Alaska",
  },
  {
    label: "Arizona",
  },
  {
    label: "Arkansas",
  },
  {
    label: "California",
  },
  {
    label: "Colorado",
  },
  {
    label: "Connecticut",
  },
  {
    label: "Delaware",
  },
  {
    label: "District Of Columbia",
  },
  {
    label: "Florida",
  },
  {
    label: "Georgia",
  },
  {
    label: "Hawail",
  },
  {
    label: "Idaho",
  },
  {
    label: "Illinois",
  },
  {
    label: "Indiana",
  },
  {
    label: "lowa",
  },
  {
    label: "Kansas",
  },
  {
    label: "Kentucky",
  },
  {
    label: "Louisiana",
  },
  {
    label: "Maine",
  },
  {
    label: "Maryland",
  },
  {
    label: "Massachusetts",
  },
  {
    label: "Michigan",
  },
  {
    label: "Minnesota",
  },
  {
    label: "Mississippi",
  },
  {
    label: "Missouri",
  },
  {
    label: "Montana",
  },
  {
    label: "Nebraska",
  },
  {
    label: "Nevada",
  },
  {
    label: "New Hampshire",
  },
  {
    label: "New Jersey",
  },
  {
    label: "New Mexico",
  },
  {
    label: "New York",
  },
  {
    label: "North Carolina",
  },
  {
    label: "North Dakota",
  },
  {
    label: "Ohio",
  },
  {
    label: "Oklahoma",
  },
  {
    label: "Oregon",
  },
  {
    label: "Pennsylvania",
  },
  {
    label: "Rhode Island",
  },
  {
    label: "South Carolina",
  },
  {
    label: "South Dakota",
  },
  {
    label: "Tennessee",
  },
  {
    label: "Texas",
  },
  {
    label: "Utah",
  },
  {
    label: "Vermont",
  },
  {
    label: "Virginia",
  },
  {
    label: "Washington",
  },
  {
    label: "West Virginia",
  },
  {
    label: "Wisconsin",
  },
  {
    label: "Wyoming",
  },
  {
    label: "Armed Forces (AA)",
  },
  {
    label: "Armed Forces (AE)",
  },
  {
    label: "Armed Forces (AP)",
  },
];
const Saudi = [
  {
    label: "Australian Capital",
  },
  {
    label: "Territory",
  },
  {
    label: "New South Territory",
  },
  {
    label: "Northern Territory",
  },
  {
    label: "Queensland",
  },
  {
    label: "South Australia",
  },
  {
    label: "Tasmania",
  },
  {
    label: "Victoria",
  },
  {
    label: "Western Australia",
  },
];

const uk = [
  {
    label: "Australian Capital",
  },
  {
    label: "Territory",
  },
  {
    label: "New South Territory",
  },
  {
    label: "Northern Territory",
  },
  {
    label: "Queensland",
  },
  {
    label: "South Australia",
  },
  {
    label: "Tasmania",
  },
  {
    label: "Victoria",
  },
  {
    label: "Western Australia",
  },
];
