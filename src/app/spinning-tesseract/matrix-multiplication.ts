import { RotationalPlane } from "./rotational-plane";
import { Vector4 } from "./vector4";

export function rotateVectorAroundPlane(vector:Vector4, plane:RotationalPlane, angle:number):Vector4 {
    let rotationMatrix:number[][] = getRotationMatrix(plane, angle);
    return multiplyMatrix4x4WithVector4x1(rotationMatrix, [ vector.x, vector.y, vector.z, vector.w ]);
}

function getRotationMatrix(plane:RotationalPlane, angle:number):number[][] {
    const sin:number = Math.sin(angle);
    const cos:number = Math.cos(angle);

    switch (plane) {
        case RotationalPlane.XY:
            return [
                [ 1, 0, 0, 0 ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, cos, -sin ],
                [ 0, 0, sin, cos ]
            ];
        case RotationalPlane.XZ:
            return [
                [ 1, 0, 0, 0 ],
                [ 0, cos, 0, -sin ],
                [ 0, 0, 1, 0 ],
                [ 0, sin, 0, cos ]
            ];
        case RotationalPlane.XW:
            return [
                [ 1, 0, 0, 0 ],
                [ 0, cos, -sin, 0 ],
                [ 0, sin, cos, 0 ],
                [ 0, 0, 0, 1 ]
            ];
        case RotationalPlane.YZ:
            return [
                [ cos, 0, 0, -sin ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ sin, 0, 0, cos ]
            ];
        case RotationalPlane.YW:
            return [
                [ cos, 0, -sin, 0 ],
                [ 0, 1, 0, 0 ],
                [ sin, 0, cos, 0 ],
                [ 0, 0, 0, 1 ]
            ];
        case RotationalPlane.ZW:
            return [
                [ cos, -sin, 0, 0 ],
                [ sin, cos, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ 0, 0, 0, 1 ]
            ];
        default:
            throw new Error("Invalid rotational plane");
    }
}

function multiplyMatrix4x4WithVector4x1(matrix:number[][], vector:number[]):Vector4 {
    return new Vector4(
        matrix[0][0] * vector[0] + matrix[0][1] * vector[1] + matrix[0][2] * vector[2] + matrix[0][3] * vector[3],
        matrix[1][0] * vector[0] + matrix[1][1] * vector[1] + matrix[1][2] * vector[2] + matrix[1][3] * vector[3],
        matrix[2][0] * vector[0] + matrix[2][1] * vector[1] + matrix[2][2] * vector[2] + matrix[2][3] * vector[3],
        matrix[3][0] * vector[0] + matrix[3][1] * vector[1] + matrix[3][2] * vector[2] + matrix[3][3] * vector[3]);
}
