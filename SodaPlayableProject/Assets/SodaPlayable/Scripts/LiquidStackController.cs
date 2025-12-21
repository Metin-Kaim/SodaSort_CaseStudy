using Assets.SodaPlayable.Scripts;
using DG.Tweening;
using System;
using System.Collections.Generic;
using UnityEngine;

public class LiquidStackController : MonoBehaviour
{
    public Transform bottle;
    public List<Transform> blocks;
    public List<float> heights;
    public AnimationCurve curve;
    public BottleHandler bottleHandler;

    public List<PourAngles> pourAnglesList;
    public List<SpriteRenderer> spriteRenderers;
    public List<float> pourAmounts;
    public List<Vector2> fillAmounts;

    public float rotateToFirstAngleDuration = 0.5f;
    public float rotateToSecondAngleDuration = 1;
    public float delayBeforePouring = 0.3f;

    void Update()
    {
        if (!bottleHandler.IsPouring) return;

        float bottleZRot = bottle.eulerAngles.z;
        float resultAngle = bottleZRot;
        if (bottleZRot > 180) //Left turn
        {
            resultAngle = 360 - bottleZRot;
        }
        for (int i = 0; i < blocks.Count; i++)
        {
            Transform block = blocks[i];
            Material mat = block.GetComponent<SpriteRenderer>().material;
            float b = curve.Evaluate(resultAngle);
            mat.SetFloat("_FillAmount", b * heights[i]);
        }
    }

    public void Pour(BottleHandler secondBottle, ColorType colorType)
    {
        bool isLeftSide;
        Transform pourPoint;

        if (secondBottle.bottleIndex == 0 || bottleHandler.bottleIndex > secondBottle.bottleIndex)//right side - pour left
        {
            pourPoint = secondBottle.rightPourPoint;
            isLeftSide = false;
        }
        else
        {
            pourPoint = secondBottle.leftPourPoint;
            isLeftSide = true;
        }

        sbyte sideMultiplier = (sbyte)(isLeftSide ? -1 : 1);

        byte index = (byte)(4 - bottleHandler.colorTypes.Count);

        byte mathcedCountInSameBottle = 1;

        for (int i = 0; i < bottleHandler.colorTypes.Count - 1; i++)
        {
            if (bottleHandler.colorTypes[i] == bottleHandler.colorTypes[i + 1])
            {
                mathcedCountInSameBottle++;
            }
            else
                break;
        }

        byte emptySlotCountInSecondBottle = (byte)(4 - secondBottle.colorTypes.Count);

        byte pourableSlotCount = (byte)Mathf.Min(mathcedCountInSameBottle, emptySlotCountInSecondBottle);

        float durationOfPouring = rotateToSecondAngleDuration / pourableSlotCount;

        var firstAngle = pourAnglesList[index].angle1 * Vector3.forward * sideMultiplier;

        Sequence seq = DOTween.Sequence();
        seq.Pause();
        seq.Append(transform.DORotate(firstAngle, rotateToFirstAngleDuration).SetEase(Ease.Linear));
        seq.Join(transform.DOMove(pourPoint.position, rotateToFirstAngleDuration).SetEase(Ease.Linear));
        seq.AppendInterval(delayBeforePouring);
        for (int i = 0; i < pourableSlotCount; i++)
        {
            SpriteRenderer renderer = spriteRenderers[index];
            var secondAngle = pourAnglesList[index].angle2 * Vector3.forward * sideMultiplier;
            float targetFill = pourAmounts[index];
            int i1 = i;
            seq.AppendCallback(() => { secondBottle.GetComponent<LiquidStackController>().Fill(colorType, durationOfPouring, i1 == pourableSlotCount - 1); });
            seq.Append(transform.DORotate(secondAngle, durationOfPouring).SetEase(Ease.Linear));
            seq.Join(DOTween.To(() => renderer.material.GetFloat("_FillAmount"), x => renderer.material.SetFloat("_FillAmount", x), targetFill, durationOfPouring).SetEase(Ease.Linear));
            seq.AppendCallback(() => { renderer.enabled = false; bottleHandler.colorTypes.RemoveAt(0); });
            index++;
        }
        seq.AppendCallback(() =>
        {
            bottleHandler.OnUnselect();
        });
        seq.Play();
    }

    public void Fill(ColorType colorType, float duration, bool isFinalFilling)
    {
        Color liquidColor = Colors.ColorMap[colorType];
        SpriteRenderer targetSprite = spriteRenderers[4 - bottleHandler.colorTypes.Count - 1];

        float initFill = fillAmounts[4 - bottleHandler.colorTypes.Count - 1].x;
        float targetFill = fillAmounts[4 - bottleHandler.colorTypes.Count - 1].y;
        bottleHandler.colorTypes.Insert(0, colorType);
        targetSprite.material.color = liquidColor;
        targetSprite.material.SetFloat("_FillAmount", initFill);
        targetSprite.enabled = true;
        if (isFinalFilling)
            bottleHandler.CheckComplete();
        DOTween.To(() => targetSprite.material.GetFloat("_FillAmount"), x => targetSprite.material.SetFloat("_FillAmount", x), targetFill, duration).SetEase(Ease.Linear);
    }
}

[Serializable]
public struct PourAngles
{
    public int angle1;
    public int angle2;
}
