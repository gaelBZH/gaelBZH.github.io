	org $4
            
Vector_001     dc.l Main

            org $500
            
Main         movea.l #STRING,a0;
             jsr RemoveSpace
    
    

RemoveSpace    
            movem.l D0/D1/A1/A2,-(A7) ; Empiler A1, A2, D0, D1
            
            movea.l a0,a1; // a1 : current writing
            movea.l a0,a2; // a2 : current reading

\loop
        move.b (a2)+,d1; D1 = Current Letter
        tst.b d1 ; (a0)==0
        beq \return
 
        move.b d1,d0
        sub.b #' ',d0 ; D0 : comparaison entre D1 et ' '
        tst.b d0 ; (a0) == ' '
        beq \loop
        
        ; Characters differents (pas un espace) 
        move.b d1,(a1)+
        jmp \loop

\return move #0,(a1)+; charactere NULL 
        movem.l (A7)+,D0/D1/A1/A2  ; Depiler A1, A2, D0, D1
        rts






IsCharError
        movea.l a0,a1; // a1 : current reading
        
\loop    
        move.b (a0)+,d0; d0 = CurrentLetter
        beq \false
        
        cmpi.b #'0',d0  ; si D0 < 0
        BLO \true
        
        cmpi.b #'9',d0  ; si D0 > 0
        BLS \true

\true
		ori.b #%00000100,ccr ; Positionne le flag Z à 1 (true).
        rts
\false
		andi.b #%11111011,ccr ; Positionne le flag Z à 0 (false).
        rts

strlen ; result in D5
    MOVEQ   #0,D5
\loop:
    MOVE.B  (A0)+,D4    ; load next byte from string and post-increment pointer
    BEQ.S   \done         ; if byte == 0, end of string
    ADDQ.L  #1,D5        ; length++
    BRA.S   \loop         ; continue loop
\done:
    RTS                   ; return with length in D0

IsMaxError

		; d5 = '2' ?
		 
		 jsr strlen
		 ; d5 == len

		; comparer la taille
		 cmpi.b #5,D5
		 BLO \false
		 BHI \true
		 BEQ \compare

\compare cmpi.b #'3',(a0)+
		 BHI \true
		 BLO \false
		 
		 cmpi.b #'2',(a0)+
		 BHI \true
		 BLO \false
		 
		 cmpi.b #'7',(a0)+
		 BHI \true
		 BLO \false

		 cmpi.b #'6',(a0)+
		 BHI \true
		 BLO \false

		 cmpi.b #'7',(a0)+
		 BHI \true


\false
		andi.b #%11111011,ccr ; Positionne le flag Z à 0 (false).
        rts

\true
		ori.b #%00000100,ccr ; Positionne le flag Z à 1 (true).
        rts

            
Quit           illegal

            org $1000
STRING         dc.b " 5 +  12 ",0 ;