import React, { useState } from 'react'
import BillingsInfo from './BillingsInfo'

import YourOrders from './YourOrders'
const Checkout = () => {
    const [region, setRegion] = useState()
    const [stat, setStat] = useState()

    const shippingPrice = () =>{
        if (region === "Benin"){
            return 25934
        }
        else if(region === "Australia"){
return 41305
        }
        else if (region === "Canada"){
            return 28644
        }
        else if (region === "France"){
            return 33325
        }
        else if (region === "Ghana"){
            return 25934
        }
        else if (region === "United States (US)"){
            return 28644
        }
        else if (region === "Saudi Arabia"){
            return 37020
        }
        else if (region === "United Kingdom (UK)"){
            return 23347
        }
        else if (region === "Sierra Leone"){
            return 25934
        }
        else {
            return 0
        }
     
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
    else{
        return 0
    }
}

    return (
        <>
            <section id="checkout_one" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <BillingsInfo  onRegionChange={(region) => setRegion(region) }  onStatChange={(stat) => setStat(stat)} />

                        
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <YourOrders region= {shippingPrice()} stat={NigeriaPrice()}  selectedState={stat} />
                  
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout