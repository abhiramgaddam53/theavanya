"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string }) => (
    <div className="flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-3xl text-[#1a1a1a]">
            ✦
        </div>
    </div>
);

export default function MapSection() {
    const defaultProps = {
        center: {
            lat: 11.5484832,
            lng: 76.1360053
        },
        zoom: 13
    };

    return (
        <section className="w-full bg-[#E5E1D8] text-[#1a1a1a]">
            <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">

                {/* Google Map Container */}
                <div className="absolute inset-0 z-0">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }} // User needs to provide key, or it works in dev mode with warning
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        options={{
                            styles: [
                                {
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#f5f5f5" }]
                                },
                                {
                                    "elementType": "labels.icon",
                                    "stylers": [{ "visibility": "off" }]
                                },
                                {
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#616161" }]
                                },
                                {
                                    "elementType": "labels.text.stroke",
                                    "stylers": [{ "color": "#f5f5f5" }]
                                },
                                {
                                    "featureType": "administrative.land_parcel",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#bdbdbd" }]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#eeeeee" }]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#757575" }]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#e5e5e5" }]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#9e9e9e" }]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#ffffff" }]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#757575" }]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#dadada" }]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#616161" }]
                                },
                                {
                                    "featureType": "road.local",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#9e9e9e" }]
                                },
                                {
                                    "featureType": "transit.line",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#e5e5e5" }]
                                },
                                {
                                    "featureType": "transit.station",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#eeeeee" }]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": [{ "color": "#c9c9c9" }]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "labels.text.fill",
                                    "stylers": [{ "color": "#9e9e9e" }]
                                }
                            ]
                        }}
                    >
                        <AnyReactComponent
                            text="Avanya"
                        />
                    </GoogleMapReact>
                </div>

                {/* Overlay Card for Location Info */}
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full flex justify-between items-end pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F5F2EA] p-8 md:p-10 pointer-events-auto max-w-md shadow-2xl"
                    >
                        <h3 className="font-serif text-3xl md:text-4xl mb-4 text-[#1a1a1a]">Our Location</h3>
                        <p className="font-poppins text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                            Nestled in the lush hills of Wayanad, surrounded by ancient forests and mist-covered peaks.
                        </p>
                        <div className="flex flex-col gap-2 font-poppins text-sm text-[#1a1a1a]">
                            <p>Wayanad, Kerala</p>
                            <p>India, 673121</p>
                        </div>
                        <div className="mt-8">
                            <Link href="https://maps.google.com" target="_blank" className="font-poppins text-xs uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition-opacity">
                                Get Directions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
