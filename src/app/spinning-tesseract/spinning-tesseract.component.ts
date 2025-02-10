import { Component } from '@angular/core';
import { Vector4 } from './vector4';
import { RotationalPlane } from './rotational-plane';
import { Vector2 } from './vector2';

@Component({
  selector: 'app-spinning-tesseract',
  standalone: true,
  imports: [],
  templateUrl: './spinning-tesseract.component.html',
  styleUrl: './spinning-tesseract.component.scss'
})
export class SpinningTesseractComponent {
  constructor() {
    this.updatePositions();
  }

  public readonly svgSize = {
    width:  512,
    height: 512
  };

  private readonly vertices:Vector4[] = [
    new Vector4(-1, -1, -1, -1), // 0
    
    new Vector4(1, -1, -1, -1), // 1
    new Vector4(1, 1, -1, -1), // 2
    new Vector4(-1, 1, -1, -1), // 3
    new Vector4(-1, 1, 1, -1), // 4
    new Vector4(1, 1, 1, -1), // 5
    new Vector4(1, -1, 1, -1), // 6
    new Vector4(-1, -1, 1, -1),  // 7

    new Vector4(-1, -1, -1, 1), // 8
    new Vector4(1, -1, -1, 1), // 9
    new Vector4(1, 1, -1, 1), // 10
    new Vector4(-1, 1, -1, 1), // 11
    new Vector4(-1, 1, 1, 1), // 12
    new Vector4(1, 1, 1, 1), // 13
    new Vector4(1, -1, 1, 1), // 14
    new Vector4(-1, -1, 1, 1)  // 15
  ];

  private readonly edges:number[][] = [
    [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 0 ], // First square
    [ 4, 5 ], [ 5, 6 ], [ 6, 7 ], [ 7, 4 ], // Second square
    [ 0, 7 ], [ 1, 6 ], [ 2, 5 ], [ 3, 4 ], // Connecting first and second square to form a cube

    [ 8, 9 ], [ 9, 10 ], [ 10, 11 ], [ 11, 8 ], // First square
    [ 12, 13 ], [ 13, 14 ], [ 14, 15 ], [ 15, 12 ], // Second Square
    [ 8, 15 ], [ 9, 14 ], [ 10, 13 ], [ 11, 12 ], // Connecting first and second square to form a cube

    [ 0, 8 ], [ 1, 9 ], [ 2, 10 ], [ 3, 11 ], // Connecting the two cubes
    [ 4, 12 ], [ 5, 13 ], [ 6, 14 ], [ 7, 15 ] // Connecting the two cubes
  ];

  private worldToScreenCoordinates(v:Vector4):Vector2 {
    // Orthographic projection by ignoring the z and w coordinates
    const padding:number = 10;
    return {
      x: (v.x + 1) / 2 * (this.svgSize.width - padding * 2) + padding,
      y: (v.y + 1) / 2 * (this.svgSize.height - padding * 2) + padding
    };
  }

  public updatePositions():void {
    this.vertexPositions = this.vertices.map(v => this.worldToScreenCoordinates(v));

    this.edgePositions = this.edges.map(edge => edge.map(i => this.vertexPositions[i]));
  }

  public rotations = {
    [RotationalPlane.XY]: 0,
    [RotationalPlane.XZ]: 0,
    [RotationalPlane.XW]: 0,
    [RotationalPlane.YZ]: 0,
    [RotationalPlane.YW]: 0,
    [RotationalPlane.ZW]: 0
  }

  public vertexPositions:Vector2[] = [];
  public edgePositions:Vector2[][] = [];
}
