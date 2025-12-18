using DG.Tweening;
using System;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.SodaPlayable.Scripts
{
    public class LiquidPour : MonoBehaviour
    {
        public List<PourList> pourList;
        public List<SpriteRenderer> spriteRenderers;
        public List<float> pourFillAmount;

        public float rotateToFirstAngleDuration = 0.5f;
        public float rotateToSecondAngleDuration = 1;
        public float rotateToInitRotationDuration = 0.5f;

        private int _counter;
        private bool _canRotate;
        private bool _isLeft;
        private bool _canTouch = true;


        private void Update()
        {
            if (!_canTouch) return;

            if (Input.GetKeyDown(KeyCode.L))
            {
                _isLeft = false;
                _canRotate = true;
            }
            else if (Input.GetKeyDown(KeyCode.K))
            {
                _isLeft = true;
                _canRotate = true;
            }
            if (_canRotate)
            {
                _canRotate = false;
                _canTouch = false;
                Pour();
            }
        }

        public void Pour()
        {
            sbyte sideMultiplier = (sbyte)(_isLeft ? 1 : -1);

            PourList selectedPour = pourList[_counter];
            var renderer = spriteRenderers[_counter];
            var targetFill = pourFillAmount[_counter];

            var firstAngle = selectedPour.angle1 * Vector3.forward * sideMultiplier;
            var secondAngle = selectedPour.angle2 * Vector3.forward * sideMultiplier;

            Sequence seq = DOTween.Sequence();
            seq.Append(transform.DORotate(firstAngle, rotateToFirstAngleDuration));
            seq.AppendInterval(0.1f);
            seq.Append(transform.DORotate(secondAngle, rotateToSecondAngleDuration));
            seq.Join(DOTween.To(() => renderer.material.GetFloat("_FillAmount"), x => renderer.material.SetFloat("_FillAmount", x), targetFill, rotateToSecondAngleDuration).SetEase(Ease.OutSine));
            seq.AppendCallback(() => renderer.enabled = false);
            seq.Append(transform.DORotate(Vector3.forward, rotateToInitRotationDuration));
            seq.AppendCallback(() => _canTouch = true);

            _counter++;
        }
    }
    [Serializable]
    public struct PourList
    {
        public int angle1;
        public int angle2;
    }
}