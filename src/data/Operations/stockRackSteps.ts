import step1 from "../../assets/profile.png";
import step2 from "../../assets/stockRackSteps/SRstep1.png";
import step3 from "../../assets/stockRackSteps/SRstep2.png";
import step4 from "../../assets/stockRackSteps/SRstep3.png";
import step5 from "../../assets/stockRackSteps/SRstep4.png";

export const stockRackSteps = [
  {
    image: step1,
    title: "Profile",
    description: "",
    instruction:
      "1. Go to Profile\n2. Click on 'Stock Racks'.",
    narration:
      "Go to Profile and Click on Stock Racks",
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: "Stock Racks",
    description: "",
    instruction:
      "Click on 'Place Stock to put a Product in Rack'.",
    narration:
      "Go to the Purchase screen in Billing",
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: "Product Details",
    description: "",
    instruction:
      "1. Add the Product\n2.Mention which Rack the product should go into\n3. Mention Quantity.",
    narration:
      "Add the Product.Mention which Rack the product should go into. Mention Quantity",
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: "Product Added to Rack",
    description: "",
    instruction:
      "Product is Added to the Rack.",
    narration:
      "Product is Added to the Rack",
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: "Edit Product",
    description: "",
    instruction:
      "Edit by clicking on the Product.\n1. Change the Quantity\n2. Move to another Rack\n3. Delete Product.",
    narration:
      "Go to the Purchase screen in Billing",
    durationAfterSpeech: 3000,
  },
]