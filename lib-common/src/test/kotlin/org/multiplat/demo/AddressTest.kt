package org.multiplat.demo

import kotlin.test.Test
import kotlin.test.assertTrue

class AddressTest{

    @Test fun testAddresValidation(){
        val address = Address("1234 W street","nothduffgihs","mimi","fl","33045")

        assertTrue { !address.isValid() }
    }
}