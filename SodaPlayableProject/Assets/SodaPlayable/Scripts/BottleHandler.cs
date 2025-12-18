using System.Collections.Generic;
using UnityEngine;

namespace Assets.SodaPlayable.Scripts
{
    public class BottleHandler : MonoBehaviour
    {
        [SerializeField] private List<SpriteRenderer> sprites;

        private void Start()
        {
            foreach (var item in sprites)
            {
                item.material = new Material(item.material);
            }
        }
    }
}