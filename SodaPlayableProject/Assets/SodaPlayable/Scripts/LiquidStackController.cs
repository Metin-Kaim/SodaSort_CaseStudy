using System.Collections.Generic;
using UnityEngine;

public class LiquidStackController : MonoBehaviour
{
    public Transform bottle;
    public List<Transform> blocks;
    public List<float> heights;
    public AnimationCurve curve;

    void Update()
    {
        if (bottle.transform.eulerAngles.z == 0) return;
        for (int i = 0; i < blocks.Count; i++)
        {
            Transform block = blocks[i];
            Material mat = block.GetComponent<SpriteRenderer>().material;
            float bottleZRot = bottle.eulerAngles.z;
            float resultAngle = bottleZRot;
            if (bottleZRot > 180) //Left turn
            {
                resultAngle = 360 - bottleZRot;
            }
            float b = curve.Evaluate(resultAngle);
            mat.SetFloat("_FillAmount", b * heights[i]);
        }
    }
}
