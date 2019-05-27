import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soy-invitado',
  templateUrl: './soy-invitado.component.html',
  styleUrls: ['./soy-invitado.component.scss']
})
export class SoyInvitadoComponent implements OnInit {

  @ViewChild('inputcodigo') inputCodigo: ElementRef;

  codigo: string = '';
  correcto: boolean = false;

  constructor(
    private router: Router,
    private rendered: Renderer2
  ) { }

  ngOnInit() {
  }

  verificar() {
    console.log( this.codigo );
    if( this.codigo === 'ABCDEFG000' ) { this.correcto = true; }
    if ( this.correcto ) {
      this.router.navigate(['/evento-invitado']);
    } else {
      Swal.fire('Soy invitado', 'El código ingresado no pertenece a un evento activo. Revisa el código e inténtalo nuevamente.', 'warning')
      .then(( f ) => {
        this.rendered.setValue( this.inputCodigo.nativeElement , '' );
        setTimeout( () => {
          this.inputCodigo.nativeElement.focus();
        }, 400);
      });
    }
  }

}
