import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Files } from 'lucide-react'
import React from 'react'

const UserLayout = ({ children,className,hideFooter=false}) => {
    return (
        <>
            <Navbar />
            <div className={className} >{children}</div>
            {!hideFooter? <Footer />:null}
        </>
    )
}

export default UserLayout