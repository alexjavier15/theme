declare var wp: any;

import { EpsilonRangeSlider } from '../../controls/range-slider';

wp.customize.controlConstructor[ 'epsilon-slider' ] = wp.customize.Control.extend( {
  ready() {
    var control: any = this;

    new EpsilonRangeSlider( control );

    control.container.on( 'change', 'input.rl-slider', ( event: Event ) => {
          control.setting.set( jQuery( event.target ).val() );
        }
    );
  }
} );
