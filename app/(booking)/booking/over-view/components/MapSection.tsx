import React from "react";
import { Phone, Plane, Bus, ChevronRight, MapPin } from "lucide-react";
import CustomContainer from "./CustomContainer";
import SectionHeading from "./SectionHeading";

const MapSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 min-h-screen flex items-center justify-center">
      <CustomContainer>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/3 space-y-12">
            <SectionHeading sub="Location" title="Getting Here" light={true} />

            <div className="space-y-6 font-poppins text-neutral-300">
              <p className="leading-relaxed">
                The avanya Hyderabad Mindspace
                <br />
                Raheja IT Park, Hitec City, Madhapur,
                <br />
                Hyderabad, Telangana, India, 500 081
              </p>
              <div className="flex items-center gap-3 text-white">
                <Phone size={18} />
                <a
                  href="tel:+914067676767"
                  className="hover:text-[#c6a87c] transition-colors"
                >
                  +91 40-67676767
                </a>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center py-2 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Plane size={20} className="text-[#c6a87c]" />
                  <span className="text-sm uppercase tracking-widest font-bold">
                    Rajiv Gandhi Intl Airport
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className="text-neutral-500 group-hover:text-white transition-colors"
                />
              </div>
              <div className="flex justify-between items-center py-2 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Bus size={20} className="text-[#c6a87c]" />
                  <span className="text-sm uppercase tracking-widest font-bold">
                    Other Transportation
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className="text-neutral-500 group-hover:text-white transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[300px] md:h-[500px] bg-neutral-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.450072682199!2d78.48088157463017!3d17.533745798573385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb854db6e91eff%3A0xff94bacf06626aa5!2sAsterisks%20Inc%20%7C%20Creative%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1765706513189!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              title="The avanya Hyderabad Mindspace Location"
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default MapSection;
