import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Files } from 'lucide-react'
import React from 'react'

const UserLayout = ({ children,hideFooter=false}) => {
    return (
        <>
            <Navbar />
            {children}
            {!hideFooter? <Footer />:null}
        </>
    )
}

export default UserLayout