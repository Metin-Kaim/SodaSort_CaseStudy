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

        private int _counter;

        private void Update()
        {
            if (Input.GetKeyDown(KeyCode.L))
            {
                PourList selectedPour = pourList[_counter];
                var renderer = spriteRenderers[_counter];
                var targetFill = pourFillAmount[_counter];

                Sequence seq = DOTween.Sequence();
                seq.Append(transform.DORotate(selectedPour.angle1 * Vector3.forward, 0.5f));
                seq.AppendInterval(0.1f);
                seq.Append(transform.DORotate(selectedPour.angle2 * Vector3.forward, 1));
                seq.Join(DOTween.To(() => renderer.material.GetFloat("_FillAmount"), x => renderer.material.SetFloat("_FillAmount", x), targetFill, 1));
                seq.AppendCallback(() => renderer.enabled = false);
                seq.Append(transform.DORotate(Vector3.forward * -0.03f, 0.5f));

                _counter++;
            }
        }
    }
    [Serializable]
    public struct PourList
    {
        public int angle1;
        public int angle2;
    }
}