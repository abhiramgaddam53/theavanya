import React from 'react';
import { Hash, BedDouble, Info, User, LogOut, LogIn, Users, Sparkles, Grid, Phone, Calendar, Wallet, CheckCircle } from 'lucide-react';

export const getHeaderIcon = (headerName: string) => {
    // Standard icon props: size 16 to match existing designs
    const iconProps = { size: 16 };

    // Normalize string to handle case variations
    const key = headerName.toLowerCase().trim();

    // Mapping based on header content
    if (key.includes('room no') || key.includes('room number')) return <Hash {...iconProps} />;
    if (key.includes('room type')) return <BedDouble {...iconProps} />;
    if (key.includes('status')) return <Info {...iconProps} />;
    if (key.includes('guest') || key.includes('name')) return <User {...iconProps} />;
    if (key.includes('check-out') || key.includes('check out')) return <LogOut {...iconProps} />;
    if (key.includes('check-in') || key.includes('check in')) return <LogIn {...iconProps} />;
    if (key.includes('occupancy')) return <Users {...iconProps} />;
    if (key.includes('house-keeping')) return <Sparkles {...iconProps} />;
    if (key.includes('reservation id') || key.includes('booking id')) return <Grid {...iconProps} />;
    if (key.includes('amount') || key.includes('paid')) return <Wallet {...iconProps} />;
    if (key.includes('contact')) return <Phone {...iconProps} />;
    if (key.includes('date')) return <Calendar {...iconProps} />;

    return null;
};
