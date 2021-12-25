/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`{
    width: 100%;
    height: 100%;
}`;

const ContactForm = styled.form`{
    
}`;

export function ContactSection(prop: { email: string }) {
    return <FormContainer>
        <ContactForm>
            <input value={prop.email} disabled={true}></input>
            <input placeholder="Subject"></input>
            <textarea placeholder="..."></textarea>
            <button type="button">Contact</button>
        </ContactForm>
    </FormContainer>;
}
